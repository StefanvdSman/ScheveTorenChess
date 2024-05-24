import Logo from './Logo';
import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarBrand,
  TextInput,
} from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className='border-b-2'>
      <Logo />
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline ' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/signin'>
          <Button gradientDuoTone='greenToBlue' outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} href='/'>
          Home
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} href='/about'>
          About
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} href='/projects'>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
