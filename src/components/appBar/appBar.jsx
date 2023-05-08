import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import css from './appBar.module.css';
import { useAuth } from 'components/hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <ul className={css.item}>
          <li>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
          { isLoggedIn && <NavLink className={css.link} to="contacts">
              Contacts
            </NavLink>}
          </li>
        </ul>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
