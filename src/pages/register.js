import { RegistrationForm } from 'components/registerationForm/RegistrationForm';
import { Helmet } from 'react-helmet';

const Register = () => (
  <>
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <RegistrationForm />
  </>
);

export default Register;