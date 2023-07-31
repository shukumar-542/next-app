import Link from 'next/link';
import Navlink from './Navlink';

const Navbar = () => {
    const navLinks = [
        {
            path : '/', title : 'home'
        },
        {
            path : '/about', title : 'about'
        },
        {
            path : '/profile', title : 'profile'
        },
        {
            path : '/blog', title : 'blog'
        },
        {
            path : '/dashboard', title : 'dashboard'
        },
    ]
    return (
        <nav className='flex justify-between container mx-auto'>
            <h1>Next App</h1>
            <ul className='flex justify-center  '>
            {
                navLinks.map(({path,title})=> <li className='mx-5' key={path}>
                    <Navlink exact={path === '/'} href={path} activeClassName="text-blue-500"> {title}</Navlink>
                </li> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;