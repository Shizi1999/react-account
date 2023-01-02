import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks';
import routes from './route';

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const authenticated = useAuth();

  return authenticated ? <>{props.children}</> : <Navigate to={routes.login} />;
};

export default PrivateRoute;
