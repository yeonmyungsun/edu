import { User, ApiResponse, PaginatedResponse } from "./global";

// Auth API 타입
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends ApiResponse {
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
}

export interface SignupResponse extends ApiResponse {
  data: {
    user: User;
  };
}

// User API 타입
export interface UpdateUserRequest {
  name?: string;
  avatar?: string;
}

export interface UpdateUserResponse extends ApiResponse {
  data: {
    user: User;
  };
}

// 일반적인 API 오류 타입
export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: any;
}

// HTTP 메서드 타입
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// API 요청 설정 타입
export interface ApiRequestConfig {
  method: HttpMethod;
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}
