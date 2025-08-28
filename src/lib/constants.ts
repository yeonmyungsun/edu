export const APP_CONFIG = {
  name: "My Next.js App",
  description: "Modern Next.js app with Design Token System",
  version: "1.0.0",
  author: "Your Name",
  url: "https://your-domain.com",
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  DASHBOARD: "/dashboard",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    SIGNUP: "/api/auth/signup",
    REFRESH: "/api/auth/refresh",
  },
  USER: {
    PROFILE: "/api/user/profile",
    UPDATE: "/api/user/update",
  },
} as const;

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

export const STORAGE_KEYS = {
  THEME: "app-theme",
  USER: "app-user",
  SETTINGS: "app-settings",
} as const;
