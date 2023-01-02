import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { MessageDialog } from '../../common/Dialog';
import userApi from '../../api/user.api';
import OAuth2 from '../../common/OAuth2';
import routes from '../../routes/route';

export type SignupFormState = {
  email: string;
  password: string;
};

const initialFormState: SignupFormState = {
  email: '',
  password: '',
};

const messageInfo = {
  header: 'Signup successfull!',
  contents: ['An verify email is sent to your email. Please check and verify it.', 'Thank you for using my service!'],
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormState>(initialFormState);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [openMessage, setOpenMessage] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (name: keyof SignupFormState) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };

  const { mutate, error } = useMutation({
    mutationFn: (data: SignupFormState) => {
      return userApi.signup(data);
    },
    onSuccess: (res) => {
      if (res.success) {
        setOpenMessage(true);
      } else {
        setErrorMessage(res.message);
      }
    },
  });

  useMemo(() => {
    if (isAxiosError(error)) {
      console.log(error);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword !== formData.password) {
      setErrorMessage('Confirm password is invalid!');
    } else {
      mutate(formData);
    }
  };

  const handleConfirmMessageDialog = useCallback(() => {
    setOpenMessage(false);
    navigate(routes.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseMessageDialog = useCallback(() => {
    setOpenMessage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <MessageDialog
        open={openMessage}
        onClose={handleCloseMessageDialog}
        onConfirm={handleConfirmMessageDialog}
        {...messageInfo}
      />
      <div className="w-form  shadow-form py-16 px-8">
        <OAuth2 title="Sign up" />
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
            <div className="mb-2">
              <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                required
              />
            </div>
          </div>
          {!!errorMessage && <div className="my-2 text-sm text-red-700">{errorMessage}</div>}

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center mt-4"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
