import { Link } from 'react-router-dom';
import profilePic from '../assets/images/profile-pic-7.png';
import innovationPic from '../assets/images/innovation.svg';
import codingBro from '../assets/images/codingBro.svg';
import bloggingBro from '../assets/images/bloggingBro.svg';
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
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  reduxIcon,
  tailwindCssIcon,
  mongoDbIcon,
  nodejsIcon,
  expressIcon,
  gitIcon,
} from '../assets/icons';

const Home = () => {
  const technologies = [
    {
      name: 'html',
      icon: htmlIcon,
    },

    {
      name: 'css',
      icon: cssIcon,
    },

    {
      name: 'javascript',
      icon: javascriptIcon,
    },

    {
      name: 'react',
      icon: reactIcon,
    },

    {
      name: 'redux',
      icon: reduxIcon,
    },

    {
      name: 'tailwindCss',
      icon: tailwindCssIcon,
    },

    {
      name: 'nodejs',
      icon: nodejsIcon,
    },

    {
      name: 'mongoDb',
      icon: mongoDbIcon,
    },

    {
      name: 'express',
      icon: expressIcon,
    },
  ];

  return (
    <div className=" mx-auto max-w-4xl mt-8 bg-blue-50 text-gray-700 p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mr-12 rounded-full shadow">
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
            I have <span className="text-blue-700 font-bold">3 years</span> of
            web development experience including{' '}
            <span className="text-blue-700 font-bold">1 year</span> of
            professional working experience 🚀
          </p>

          <p className="mb-3">
            I love working on frontend and backend to build end to end web
            applications.
          </p>

          <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
            <a
              className="transition ease-in-out delay hover:scale-110 hover:shadow"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <img className="w-6" src={githubIcon} alt="github" />
            </a>
            <a
              className="transition ease-in-out delay hover:scale-110 hover:shadow"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <img className="w-6" src={linkedinIcon} alt="linkedin" />
            </a>
            <a
              className="transition ease-in-out delay hover:scale-110 hover:shadow"
              href={PEERLIST}
              target="_blank"
              rel="noreferrer"
              title="peerlist"
            >
              <img className="w-6" src={peerlistIcon} alt="peerlist" />
            </a>
            <a
              className="transition ease-in-out delay hover:scale-110 hover:shadow"
              href={TWITTER}
              target="_blank"
              rel="noreferrer"
              title="twitter"
            >
              <img className="w-6" src={twitterIcon} alt="twitter" />
            </a>
            <a
              className="transition ease-in-out delay hover:scale-110 hover:shadow"
              href={BLOGS}
              target="_blank"
              rel="noreferrer"
              title="hashnode"
            >
              <img
                className="w-6"
                src={hashnodeIcon}
                alt="hashnode"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-blue-700 mb-2">
            Technologies⚡
          </h2>
          <p className="text-lg mr-5">I love working with</p>
        </div>

        <div className="flex justify-center mt-12">
          <img
            className="max-w-xs mr-24 hidden lg:block"
            src={innovationPic}
            alt=""
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {technologies.map((t) => {
              return (
                <div
                  key={t.name}
                  className="bg-gray-50 p-4 shadow rounded cursor-pointer text-center flex flex-col items-center justify-center transition-all duration-150 hover:scale-105 border-b-2 hover:border-blue-700"
                >
                  <img className="w-12 h-12 mb-2" src={t.icon} alt="" />
                  <h4 className="uppercase text-sm text-gray-600">{t.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-blue-700 mb-2">
            My Work🚀
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
          <div className="bg-gray-50 shadow-md rounded p-4">
            <img className="mr-2" src={codingBro} alt="" />
            <h3 className="text-2xl text-center text-blue-600 font-semibold">
              Projects 💻
            </h3>
            <p className="px-4 mt-1">
              I love learning about web ecosystem and build projects around it
              to cement my learnings.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                to={PROJECTS}
                className="py-1 px-4 text-blue-50 rounded shadow-md transition ease-in-out delay-100 bg-blue-800 hover:shadow-2xl hover:scale-105 hover:bg-blue-600 duration-300 active:scale-100 active:bg-blue-800 mr-2"
              >
                Projects
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 shadow-md rounded p-4">
            <img className="mr-2" src={bloggingBro} alt="" />
            <h3 className="text-2xl text-center text-blue-600 font-semibold mt-3">
              Blogs ✍️
            </h3>
            <p className="px-2 mt-1">
              I like to read and write about multiple things. I document my
              learnings by writing blogs.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={BLOGS}
                target="_blank"
                className="py-1 px-4 text-blue-50 rounded shadow-md transition ease-in-out delay-100 bg-blue-800 hover:shadow-2xl hover:scale-105 hover:bg-blue-600 duration-300 active:scale-100 active:bg-blue-800 mr-2"
                rel="noreferrer"
              >
                Blogs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
