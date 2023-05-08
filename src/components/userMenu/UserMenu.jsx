import { useAuth } from 'components/hooks/useAuth';
import css from './userMenu.module.css'
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
    const dispatch=useDispatch()
    const { user } = useAuth()
    
   const handleLogOut= () => dispatch(logOut())

    return (
      <div className={css.wrapper}>
        <p className={css.username}>Welcome, {user.name}</p>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    );}