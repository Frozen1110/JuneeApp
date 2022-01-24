import networkService from '@junee/api/network-service';

const { auth, client } = networkService();

const register = (registrationRequest: any) => {
  return auth.post('register', registrationRequest);
}

const authenticate = (authenticationRequest: any) => {
  return auth.post('authenticate', authenticationRequest);
}

const sendMagicLink = (authenticationRequest: any) => {
  return auth.post('send-authentication-link', authenticationRequest);
}

export {
  register,
  authenticate,
  sendMagicLink,
}