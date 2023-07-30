import Link from 'next/link';

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
                    <Link href={path}> {title}</Link>
                </li> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;