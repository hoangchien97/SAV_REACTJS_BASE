import { LoginRequest, LoginResponse, RegisterRequest } from "@interfaces/auth";
import { AxiosResponse } from "axios";
import Instance from "./instance";

export function login(params: LoginRequest): Promise<LoginResponse> {
  return Instance.post(`api/login`, params);
}

export function register(params: RegisterRequest): Promise<AxiosResponse> {
  return Instance.post(`api/register`, params);
}
