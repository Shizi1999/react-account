import { getToken } from '../utils/tokenHelper';

export function useAuth() {
  const token = getToken();
  return !!token;
}
