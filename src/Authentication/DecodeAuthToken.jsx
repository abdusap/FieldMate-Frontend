import jwt_decode from 'jwt-decode';
import getAuthToken from './GetAuthToken';


const decodeAuthToken = () => {
  const token = getAuthToken();
  if (token) {
    return jwt_decode(token);
  } else {
    return null;
  }
};

export default decodeAuthToken;
