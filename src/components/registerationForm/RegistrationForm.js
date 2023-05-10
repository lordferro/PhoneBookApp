import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handeSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
  };

  return (
    <form className={css.form} onSubmit={handeSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
