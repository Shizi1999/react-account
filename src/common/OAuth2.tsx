import { logoGoogle, logoFb, logoGithub } from '../assets/images/logos';
import { FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '../constant';

const OAuth2: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full">
      <a
        className="flex relative justify-center items-center mb-2 w-full border py-2 rounded-md hover:bg-gray-100"
        href={GOOGLE_AUTH_URL}
      >
        <img className="w-6 absolute left-4" src={logoGoogle} alt="Google" /> {title} with Google
      </a>
      <a
        className="flex relative justify-center items-center mb-2 w-full border py-2 rounded-md hover:bg-gray-100"
        href={FACEBOOK_AUTH_URL}
      >
        <img className="w-6 absolute left-4" src={logoFb} alt="Facebook" /> {title} with Facebook
      </a>
      <a
        className="flex relative justify-center items-center mb-2 w-full border py-2 rounded-md hover:bg-gray-100"
        href={GITHUB_AUTH_URL}
      >
        <img className="w-6 absolute left-4" src={logoGithub} alt="Github" /> {title} with Github
      </a>
    </div>
  );
};

export default OAuth2;
