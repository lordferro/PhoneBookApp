import { RegistrationForm } from 'components/registerationForm/RegistrationForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </>
  );
}
