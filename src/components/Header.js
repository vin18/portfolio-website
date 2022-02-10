import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-50 text-gray-900 p-4 border border-b-400">
      <nav className="flex justify-between items-center container mx-auto text-lg">
        <Link to="/">
          <h3 className="font-bold text-2xl text-blue-800">Vinit Raut</h3>
        </Link>

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
