import { Navigate } from 'react-router-dom';
import routes from '../../routes/route';
import { useQuery } from '@tanstack/react-query';
import userApi from '../../api/user.api';
import { getToken } from '../../utils/tokenHelper';

const Profile: React.FC = () => {
  const token = getToken();
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => userApi.getUser(),
  });

  if (token) {
    if (data?.email) {
      return (
        <div className="flex flex-col w-full justify-center items-center mt-10">
          <div className="rounded-full overflow-hidden">
            <img src={data.imageUrl || ''} alt="avatar" />
          </div>
          <div className="text-blue-500 mt-2">{data.email}</div>
        </div>
      );
    }

    if (data?.message) {
      return <div>{data.message}</div>;
    }
    return <div>...Loading</div>;
  } else {
    return <Navigate to={routes.login} />;
  }
};

export default Profile;
