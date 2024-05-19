import { Avatar, Button, Dropdown, Navbar, NavbarBrand, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa'
export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className='border-b-2'>
        <Link
         to='/'
         className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            Schaakvereniging
            <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white'>De Scheve Toren</span>
        </Link>
        <form>
            <TextInput
                type ='text'
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
                <Button gradientDuoTone="greenToBlue" outline>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
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
  )
}
