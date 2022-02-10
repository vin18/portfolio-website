import { Link } from 'react-router-dom';
import { ABOUT, BLOGS, HASHNODE_BLOG, HOME, PROJECTS } from '../config';

const Header = () => {
  return (
    <header className="bg-blue-50 text-gray-900 p-4 border border-b-400">
      <nav className="flex justify-between items-center container mx-auto text-lg">
        <Link to={HOME}>
          <h3 className="font-bold text-2xl text-blue-800">Vinit Raut</h3>
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
    </header>
  );
};

export default Header;
