import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function SignIn() {
  return (
    <div className='min-h-screen mt-20'>
      <div>
        <div>
          <Logo className='font-bold dark:text-white text-4xl' />
          <p className='text-2xl w-2/3'>
            Create a new account to personalize your experience!
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
