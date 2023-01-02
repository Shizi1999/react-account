import { useMutation } from '@tanstack/react-query';
import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import userApi from '../../api/user.api';
import OAuth2 from '../../common/OAuth2';
import routes from '../../routes/route';
import { setToken } from '../../utils/tokenHelper';

export type LoginFormState = {
  email: string;
  password: string;
};

const initialFormState: LoginFormState = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>(initialFormState);
  const navigate = useNavigate();

  const handleChange = (name: keyof LoginFormState) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };

  const { mutate, error } = useMutation({
    mutationFn: (data: LoginFormState) => {
      return userApi.login(data);
    },
    onSuccess: (res) => {
      setToken(res.accessToken);
      navigate(routes.profile);
    },
  });

  const errorForm = useMemo(() => {
    if (isAxiosError(error)) {
      if (error?.response?.status === 401) {
        return true;
      }
      return false;
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-form  shadow-form py-16 px-8">
        <OAuth2 title="Login" />
        <div className="w-full h-0.5 z-0 my-8 bg-gray-300 relative ">
          <span className="absolute bg-white px-2 translate-y-1/2 bottom-0 translate-x-1/2 right-1/2 text-gray-500 block z-10">
            OR
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange('email')}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange('password')}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                required
              />
            </div>
          </div>
          {errorForm && <div className="my-2 text-sm text-red-700">Username or password invalid!</div>}
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center mt-4">
            Login
          </button>
        </form>
        <Link to={routes.forgetpassword} className="block mt-2 italic text-blue-700">
          Forget your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
