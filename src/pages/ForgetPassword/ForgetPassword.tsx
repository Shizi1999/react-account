import { useMutation } from '@tanstack/react-query';
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import userApi from '../../api/user.api';
import routes from '../../routes/route';
import { MessageDialog } from '../../common/Dialog';

const messageInfo = {
  header: 'Notification !',
  contents: ['An email was sent to your email. Please check and verify it.', 'Thank you for using my service!'],
};

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: userApi.forgetPassword,
    onSuccess: (res) => {
      if (res.success) {
        setOpenMessage(true);
      } else {
        setErrorMessage(res.message);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>
          {errorMessage && <div className="my-2 text-sm text-red-700">{errorMessage}</div>}
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center mt-4">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
