import { LoginRequest, LoginResponse, ProfileResponse, RegisterRequest } from "@interfaces/auth";
import { AxiosResponse } from "axios";
import Instance from "./instance";

export function login(params: LoginRequest): Promise<LoginResponse> {
  return Instance.post(`api/Catalog/User/Login`, params);
}

export function register(params: RegisterRequest): Promise<AxiosResponse> {
  return Instance.post(`api/register`, params);
}

export function getProfile(): Promise<ProfileResponse> {
  return Instance.get("api/Catalog/User");
}
