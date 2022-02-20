import { GITHUB, TWITTER } from '../config';
import projects from '../assets/data/projects';
import { githubIcon } from '../assets/icons';
import { Link } from 'react-router-dom';
import Project from './Project';

const Projects = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-10">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-2">
          Projects 💼
        </h2>
        <p className="text-gray-800">
          Resumes and degrees are old faishoned. I believe in{' '}
          <span className="font-semibold">proof of work and skills</span>. I
          like to apply my learnings by building projects. Checkout my projects
          and feel free to reach out for any{' '}
          <a target="_blank" className="hover:underline" href={TWITTER}>
            feedback
          </a>
          &nbsp;😊
        </p>
      </div>

      <div className="mx-auto max-w-xs">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href={GITHUB}
          target="_blank"
          className="mt-3  py-1 px-4 text-blue-50 rounded shadow-,d transition ease-in-out delay-100 bg-blue-800 hover:shadow-2xl hover:scale-105 hover:bg-blue-600 duration-300 active:scale-100 active:bg-blue-800"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
