import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3  max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Logo className='font-bold dark:text-white text-3xl' />
          <p className='text-sm mt-5'>
            Create a new account to personalize your experience!
          </p>
        </div>
        <div className='flex-1'>
          <form>
            <div>
              <Label value='Your username' />
              <TextInput placeholder='Username' id='username' type='text' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                placeholder='name@example.com'
                id='email'
                type='text'
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput placeholder='Password' id='password' type='password' />
            </div>
          </form>
          <Button gradientDuoTone='greenToBlue' type='submit' className='mt-5'>
            Sign Up
          </Button>
          <div className='flex gap-2 text-sm mt-5'>
            <p>Already have an account?</p>
            <Link to='/signin'>
              <p className='text-blue-500'>Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
