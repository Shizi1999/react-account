import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';

import routes from '../../routes/route';

export type LayoutProp = {
  children: React.ReactNode;
};

const MainLayout: React.FC<LayoutProp> = (props) => {
  const authenticated = useAuth();
  return (
    <div className="flex flex-col w-full h-screen bg-white ">
      <nav className="h-14 w-full flex items-center px-10 justify-between ">
        <div>
          <NavLink to={routes.home} className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-gray-900 text-xl font-semibold whitespace-nowrap">Home</span>
          </NavLink>
        </div>
        <div className="flex">
          <div className="mx-4">
            <NavLink to={routes.login} className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-gray-700')}>
              Login
            </NavLink>
          </div>
          <div className="mx-4">
            <NavLink to={routes.signup} className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-gray-700')}>
              SignUp
            </NavLink>
          </div>
          {authenticated && (
            <div className="mx-4">
              <NavLink to={routes.profile} className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-gray-700')}>
                Profile
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      <div className="flex-1">{props.children}</div>
    </div>
  );
};

export default MainLayout;
