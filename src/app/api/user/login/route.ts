import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    console.log("Starting the POST request");

    // Wait for Prisma to connect before proceeding
    if (!prisma) {
      throw new Error("Prisma client is not initialized");
    }
    
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    const body = await request.json();
    console.log("Request body:", body);

    if (body.username) {
      const { username, email, password, bio } = body;

      console.log("Checking for existing user with email:", email);
      const existingUser: User | null = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        console.log("User already exists");
        return NextResponse.json(
          { message: "User already exists" },
          { status: 400 }
        );
      }

      // Hash the password
      console.log("Hashing password for new user");
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Password hashed successfully");

      // Create new user
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          bio,
          createdAt: new Date(),
          lastLogin: new Date(),
        },
      });

      console.log("New user created:", newUser);
      return NextResponse.json(
        { message: "User created successfully", userId: newUser.id },
        { status: 201 }
      );
    } else {
      const { email, password } = body;
      console.log("Attempting to log in user with email:", email);
      const user: User | null = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        console.log("User not found");
        return NextResponse.json(
          { message: "User not found" },
          { status: 400 }
        );
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log("Password validation result:", isPasswordValid);

      if (!isPasswordValid) {
        console.log("Invalid password");
        return NextResponse.json(
          { message: "Invalid password" },
          { status: 400 }
        );
      }

      const token = sign(
        { userId: user.id, email: user.email, username: user.username },
        `${process.env.JWT_SECRET}`,
        {
          expiresIn: "1h",
        }
      );

      const response = NextResponse.json({
        message: "Login successful",
        data: {
          userId: user.id,
          email: user.email,
          username: user.username,
          token: token,
        },
      });

      console.log("Setting cookie with token");
      response.cookies.set("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });

      return response;
    }
  } catch (error) {
    console.error("An error occurred during the POST request:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
