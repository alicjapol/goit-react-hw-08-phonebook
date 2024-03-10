
import LogoutButton from '../LogoutButton/LogoutButton'
import useAuth  from '../../hooks/useAuth'; 
import './UserMenu.css'; 


export default function UserMenu() {
  const { user } = useAuth(); 

  return (
    <div className="userMenuContainer">
      <p className="userEmail">Email: {user?.email}</p> 
      <LogoutButton />
    </div>
  );
};
