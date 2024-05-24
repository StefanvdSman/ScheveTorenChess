import { Link } from 'react-router-dom';
export default function Logo({
  className = 'self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white',
}) {
  return (
    <Link to='/' className={className}>
      Schaakvereniging
      <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white'>
        De Scheve Toren
      </span>
    </Link>
  );
}
