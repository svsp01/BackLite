import api from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  RegisterResponse,
  LoginResponse,
  LoginCredentials,
  RegisterCredentials,
} from "./types";
export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterCredentials
>("user/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post("/user/login", userData);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials>(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/login", credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
