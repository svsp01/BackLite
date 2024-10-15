// types.ts
export interface User {
  id: string;
  email: string;
  username: string;
  creditPoints?: number;
  subscription?: 'free' | 'basic' | 'pro' | 'ultra';
  bio?: string;
}

export interface UserState {
  user: User | null;   // The logged-in user's data
  loading: boolean;    // Indicates whether the app is waiting for an API response
  error: string | null; // Stores error messages if any API call fails
}

export interface RegisterResponse {
  user: User;
  token: string; // Assuming your API returns a token
}

export interface LoginResponse {
  user: User;
  token: string; // Assuming your API returns a token
}

export interface LoginCredentials {
  email: string; // Changed from email to username
  password: string;
}

export interface RegisterCredentials {
  username: string; // Changed from email to username
  password: string;
  email:string
}
