import { useContext } from 'react';
import { AuthContext } from '@junee/contexts/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
