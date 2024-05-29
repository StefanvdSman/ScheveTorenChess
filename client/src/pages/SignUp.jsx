import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import React, { useState } from 'react';
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value.trim(),
    });
  };
  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage('');
      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      res.json().then((res) => {
        //TODO: change hardcoded message
        setErrorMessage(res.message === 'Signup successful' ? '' : res.message);
        if (res.message === 'Signup successful') {
          navigate('/signin');
        }
        setLoading(false);
      });
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  };
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
              <TextInput
                placeholder='Username'
                id='username'
                type='text'
                onChange={HandleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                placeholder='name@example.com'
                id='email'
                type='text'
                onChange={HandleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                placeholder='Password'
                id='password'
                type='password'
                onChange={HandleChange}
              />
            </div>
          </form>
          <Button
            gradientDuoTone='greenToBlue'
            type='submit'
            className='mt-5'
            onClick={HandleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
          <div className='flex gap-2 text-sm mt-5'>
            <p>Already have an account?</p>
            <Link to='/signin'>
              <p className='text-blue-500'>Sign In</p>
            </Link>
          </div>
          {errorMessage && (
            <Alert
              className='mt-5'
              color={
                errorMessage === 'SignUp successful' ? 'success' : 'failure'
              }
            >
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
