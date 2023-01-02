import React from 'react';

import routes from './route';
// layout
import { LayoutProp } from '../layouts/MainLayout/MainLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
// page
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SingUp';
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import Home from '../pages/Home/Home';
import OAuth2Redirect from '../pages/OAuth2Redirect/OAuth2Redirect';
import Profile from '../pages/Profile/Profile';

export interface RouteItem {
  path: string;
  Component: React.FC;
  Layout: React.FC<LayoutProp>;
}

export const publicRoute: RouteItem[] = [
  { path: routes.home, Component: Home, Layout: MainLayout },
  { path: routes.login, Component: Login, Layout: MainLayout },
  { path: routes.signup, Component: SignUp, Layout: MainLayout },
  { path: routes.profile, Component: Profile, Layout: MainLayout },
  { path: routes.forgetpassword, Component: ForgetPassword, Layout: MainLayout },
  { path: routes.resetpassword, Component: ResetPassword, Layout: MainLayout },
  { path: routes.oauth2redirect, Component: OAuth2Redirect, Layout: MainLayout },
];
export const privateRoute: RouteItem[] = [];
