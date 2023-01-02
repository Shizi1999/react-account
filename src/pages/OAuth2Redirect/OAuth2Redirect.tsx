import { Navigate } from 'react-router-dom';
import { useQueryString } from '../../hooks';
import routes from '../../routes/route';
import { setToken } from '../../utils/tokenHelper';

const OAuth2Redirect: React.FC = () => {
  const queryString = useQueryString();

  if (queryString?.token) {
    setToken(queryString.token);
    return <Navigate to={routes.profile} />;
  } else {
    return <>Error</>;
  }
};

export default OAuth2Redirect;
