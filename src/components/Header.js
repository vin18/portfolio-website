import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, BLOGS, HASHNODE_BLOG, HOME, PROJECTS } from '../config';
import profilePic from '../assets/images/profile-pic-7.png';
import useWindowWidth from '../hooks/useWindowWidth';
import { CloseIcon, HamburgerIcon } from '../assets/icons';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { isMobile, isTab } = useWindowWidth();

  return (
    <header className="bg-blue-50 text-gray-900 p-4 border border-b-400">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center ml-4 lg:hidden"
      >
        {!open ? <HamburgerIcon /> : <CloseIcon />}

        <Link className="mx-auto" to={HOME}>
          <h3 className="mr-4 font-bold text-2xl text-blue-800">Vinit Raut</h3>
        </Link>
      </div>

      {open && isTab ? (
        <nav className="block z-10 lg:hidden absolute w-full bg-blue-100 border-t border-t-blue-200 top-14 left-0 shadow">
          <ul className="flex flex-col p-4 space-y-2 text-blue-900">
            <li>
              <Link className="hover:text-blue-800" to={ABOUT}>
                About
              </Link>
            </li>

            <li>
              <Link className="hover:text-blue-800" to={PROJECTS}>
                Projects
              </Link>
            </li>

            <li>
              <a className="hover:text-blue-800" href={BLOGS} target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="hidden lg:flex justify-between items-center container mx-auto text-lg">
          <Link className="flex items-center" to={HOME}>
            <img className="w-8" src={profilePic} alt="Profile pic" />{' '}
            <h3 className="ml-2 font-bold text-2xl text-blue-800">
              Vinit Raut
            </h3>
          </Link>

          <ul className="flex items-center space-x-8">
            <li>
              <Link className="hover:text-blue-800" to={ABOUT}>
                About
              </Link>
            </li>

            <li>
              <Link className="hover:text-blue-800" to={PROJECTS}>
                Projects
              </Link>
            </li>

            <li>
              <a className="hover:text-blue-800" href={BLOGS} target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
