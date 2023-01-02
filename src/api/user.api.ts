import { LoginFormState } from '../pages/Login/Login';
import { SignupFormState } from '../pages/SignUp/SingUp';
import axiosClient from './axiosClient';

type Response = {
  message: string;
  success: boolean;
};

type UserResponse = {
  name?: string | null;
  imageUrl?: string | null;
  email?: string | null;
  role?: {
    name?: string;
  };
  message?: string;
  success?: boolean;
};

const userApi = {
  getUser(): Promise<UserResponse> {
    return axiosClient.get('/user/me');
  },
  login(data: LoginFormState): Promise<{ accessToken: string }> {
    return axiosClient.post('/auth/login', data);
  },

  signup(data: SignupFormState): Promise<Response> {
    return axiosClient.post('/auth/signup', data);
  },

  forgetPassword(data: { email: string }): Promise<Response> {
    return axiosClient.post('/auth/forget-password', data);
  },

  resetPassword(data: { token: string; password: string }): Promise<Response> {
    return axiosClient.post('/auth/reset-password', data);
  },
};

export default userApi;
