import { Link } from 'react-router-dom';
import profilePic from '../assets/images/profile-pic-6.png';
import { BLOGS, PROJECTS } from '../config';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto max-w-3xl mt-8 md:mt-32 bg-blue-50 text-gray-700 p-8">
      <div className="mr-12 border rounded-full border-blue-200">
        <img className="w-64" src={profilePic} alt="Profile pic" />
      </div>
      <div className="mt-8 md:mt-0">
        <h3 className="text-3xl text-gray-800 font-bold">
          Hey, I'm <span className="text-blue-800">Vinit Raut</span>{' '}
        </h3>
        <p className="mb-3">
          Software Developer specializing in Web Development
        </p>
        <p className="mb-3">
          I love building end to end web applications. Checkout my{' '}
          <Link className="hover:text-blue-900 hover:underline" to={PROJECTS}>
            projects
          </Link>{' '}
          and{' '}
          <Link className="hover:text-blue-900 hover:underline" to={BLOGS}>
            blogs
          </Link>
          . You can also check my resume.
        </p>
        <p>I currently work with</p>
        <p className="text-gray-800">
          Javascript, CSS, React, TailwindCSS, Redux, Nodejs, ExpressJs, MongoDB
        </p>
      </div>
    </div>
  );
};

export default Home;
