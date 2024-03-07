import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors';

export default function useAuth() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
  
    return { isLoggedIn, user };
  }
