import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-50 text-gray-900 p-5">
      <nav className="flex justify-between items-center container mx-auto text-xl">
        <h3 className="font-bold text-2xl">Vinit Raut</h3>

        <ul className="flex items-center space-x-8">
          <li>
            <Link className="hover:text-blue-800" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-800" to="/projects">
              Projects
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-800" to="/blogs">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
