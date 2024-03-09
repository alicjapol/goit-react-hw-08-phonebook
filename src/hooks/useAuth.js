import { useSelector } from 'react-redux';
import { selectisIsRefreshing, selectIsLoggedIn, selectUser } from '../redux/auth/selectors';

export default function useAuth() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectisIsRefreshing)
    return { isLoggedIn, user, isRefreshing };
  }
