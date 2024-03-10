
import LogoutButton from '../LogoutButton/LogoutButton'
import useAuth  from '../../hooks/useAuth'; 


export default function UserMenu() {
  const { user } = useAuth(); 

  return (
    <div>
      <p>{user?.email}</p> 
      <LogoutButton />
    </div>
  );
};
