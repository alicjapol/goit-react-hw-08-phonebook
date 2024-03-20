
import LogoutButton from '../LogoutButton/LogoutButton'
import useAuth  from '../../hooks/useAuth'; 


export default function UserMenu() {
  const { user } = useAuth(); 

  return (
    <div className="userMenuContainer">
    <div className="thumb-lg member-thumb mx-auto">
      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" className='avatar' />
    </div>
    <p className="userEmail">Email: {user?.email}</p>
    <LogoutButton />
  </div>
  );
};



