import { Link } from 'react-router-dom';
import SynagogueIcon from '@mui/icons-material/Synagogue';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 flex justify-around h-20 items-center bg-black hidden md:flex gap-6">
        <Link to="/">
          <button className='transition-transform duration-300 hover:scale-110  hover:cursor-pointer '> 
            <SynagogueIcon style={{ width: '3rem', height: '3rem' ,color:'white' }}/>
          </button>
        </Link>
        <div className="flex justify-between gap-10 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 text-white hover:border-t-2 hover:border-gray-500 hover:scale-110 hover:text-gray-500 hover:cursor-pointer ${
                isActive ? 'border-t-2 border-white' : 'border-t-2 border-transparent'}`}>
              HOME
          </NavLink>

       <NavLink
          to="/portfolio"
          className={({ isActive }) =>
          ` transition-all duration-300 text-white hover:border-t-2 hover:border-gray-500 hover:scale-110 hover:text-gray-500 hover:cursor-pointer ${
           isActive ? 'border-t-2 border-white' : 'border-t-2 border-transparent'}`}>
        PORTFOLIO
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
          ` transition-all duration-300 text-white hover:border-t-2 hover:border-gray-500 hover:scale-110 hover:text-gray-500 hover:cursor-pointer ${
          isActive ? 'border-t-2 border-white' : 'border-t-2 border-transparent'}`}>
        CONTACT
        </NavLink>
        </div>
        <div className='flex justify-between gap-3 '>
            <Link to="https://t.me/dmshebash"><button className='transition-transform duration-300 hover:scale-135 hover:cursor-pointer'><TelegramIcon style={{ width: '1rem', height: '1rem' ,color:'white'}}/></button></Link>
            <Link to="https://www.linkedin.com/in/dmshamangeldy"><button className='transition-transform duration-300 hover:scale-135 hover:cursor-pointer'><LinkedInIcon style={{ width: '1rem', height: '1rem',color:'white' }}/></button></Link>
            <Link to="https://github.com/dmshsh"><button className='transition-transform duration-300 hover:scale-135 hover:cursor-pointer'><GitHubIcon style={{ width: '1rem', height: '1rem',color:'white' }}/></button></Link>
        </div>
        
    </div>
    <button
          className="md:hidden bg-black text-white p-2 w-full"
           onClick={() => setIsOpen(!isOpen)}
          >
        ☰
        {isOpen && (
  <div className="flex flex-col items-center gap-4 py-4 bg-black text-white">
    <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 text-white hover:border-t-2 hover:border-gray-500 hover:scale-110 hover:text-gray-500 hover:cursor-pointer ${
                isActive ? 'border-t-2 border-white' : 'border-t-2 border-transparent'}`}>
              HOME
          </NavLink>
     <NavLink
          to="/portfolio"
          className={({ isActive }) =>
          ` transition-all duration-300 text-white hover:border-t-2 hover:border-gray-500 hover:scale-110 hover:text-gray-500 hover:cursor-pointer ${
           isActive ? 'border-t-2 border-white' : 'border-t-2 border-transparent'}`}>
        PORTFOLIO
        </NavLink>
     <NavLink
          to="/contact"
          className={({ isActive }) =>
          ` transition-all duration-300 text-white hover:border-t-2 hover:border-gray-500 hover:scale-110 hover:text-gray-500 hover:cursor-pointer ${
          isActive ? 'border-t-2 border-white' : 'border-t-2 border-transparent'}`}>
        CONTACT
        </NavLink>
  </div>
)}

        </button>
        </>
  );
}

export default Navbar;
