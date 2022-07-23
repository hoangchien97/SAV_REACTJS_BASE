export interface LoginRequest {
  Email: string;
  Password: string;
}

export interface LoginResponse {
  AccessToken: string;
}
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface ProfileResponse {
  Id: number | string;
  Name?: string;
  Phone?: string;
  Email: string;
  Address?: string;
  AvatarImage?: string;
  Permission?: string;
}

export interface UpdateProfileRequest {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
}
