import { Link } from 'react-router-dom';
import profilePic from '../assets/images/profile-pic-7.png';
import {
  BLOGS,
  GITHUB,
  LINKEDIN,
  PEERLIST,
  PROJECTS,
  TWITTER,
} from '../config';
import {
  githubIcon,
  hashnodeIcon,
  linkedinIcon,
  peerlistIcon,
  twitterIcon,
} from '../assets/icons';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto max-w-4xl mt-8 md:mt-20 bg-blue-50 text-gray-700 p-8">
      <div className="md:mr-12 border rounded-full border-blue-200">
        <img className="w-72" src={profilePic} alt="Profile pic" />
      </div>
      <div className="mt-8 md:mt-0">
        <h3 className="text-3xl text-gray-800 font-bold">
          Hey, I'm <span className="text-blue-800">Vinit Raut</span>
        </h3>

        <p className="mb-3 text-gray-600">
          Software Developer specializing in Web Development
        </p>

        <p className="mb-3">
          I have <span className="text-blue-700 font-bold">3 years</span> of web
          development experience including{' '}
          <span className="text-blue-700 font-bold">1 year</span> of
          professional working experience 🚀
        </p>

        <p className="mb-3">
          I love working on frontend and backend to build end to end web
          applications. Checkout my{' '}
          <Link
            className="font-bold text-blue-700 hover:underline"
            to={PROJECTS}
          >
            projects
          </Link>{' '}
          and{' '}
          <a
            className="font-bold text-blue-700 hover:underline"
            href={BLOGS}
            target="_blank"
          >
            blogs
          </a>
          ⚡
        </p>
        <p>I currently work with</p>

        <p className="text-gray-800">
          Javascript, CSS, React, TailwindCSS, Redux, Nodejs, ExpressJs, MongoDB
        </p>

        <div className="flex md:block justify-center">
          <button className="mt-3  py-1 px-4 text-blue-50 rounded shadow-,d transition ease-in-out delay-100 bg-blue-800 hover:shadow-2xl hover:scale-105 hover:bg-blue-600 duration-300 active:scale-100 active:bg-blue-800">
            Resume
          </button>
        </div>

        <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
          <a href={GITHUB} target="_blank" title="github">
            <img className="w-5" src={githubIcon} alt="github" />
          </a>
          <a href={LINKEDIN} target="_blank" title="linkedin">
            <img className="w-5" src={linkedinIcon} alt="linkedin" />
          </a>
          <a href={PEERLIST} target="_blank" title="peerlist">
            <img className="w-5" src={peerlistIcon} alt="peerlist" />
          </a>
          <a href={TWITTER} target="_blank" title="twitter">
            <img className="w-5" src={twitterIcon} alt="twitter" />
          </a>
          <a href={BLOGS} target="_blank" title="hashnode">
            <img className="w-5" src={hashnodeIcon} alt="hashnode" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
