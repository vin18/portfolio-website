import { useParams } from 'react-router-dom';
import projects from '../assets/data/projects';

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const project = projects.find((p) => p.slug === projectSlug);

  return (
    <div className="text-gray-800 max-w-2xl bg mx-auto p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl text-blue-500 font-semibold">{project.name}</h1>

        <div>
          <a href={project.demo} target="_blank">
            <button className="mt-3  py-1 px-4 text-blue-50 rounded shadow-,d transition ease-in-out delay-100 bg-blue-800 hover:shadow-2xl hover:scale-105 hover:bg-blue-600 duration-300 active:scale-100 active:bg-blue-800 mr-2">
              Demo
            </button>
          </a>

          <a href={project.github} target="_blank">
            <button className="mt-3  py-1 px-4 text-blue-50 rounded shadow-,d transition ease-in-out delay-100 bg-blue-800 hover:shadow-2xl hover:scale-105 hover:bg-blue-600 duration-300 active:scale-100 active:bg-blue-800">
              Code
            </button>
          </a>
        </div>
      </div>
      <p className="text-center mt-2 sm:text-left">{project.description}</p>

      <div className="mt-5 flex justify-center">
        <img
          src={project.bannerImg}
          alt={`${project.name} image`}
          className="rounded shadow max-w-full sm:max-w-2xl border border-blue-200"
        />
      </div>

      <div className="mt-5">
        <h2 className="text-2xl text-blue-500  font-semibold">
          💡 Introduction
        </h2>
        <p>{project.introduction}</p>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl text-blue-500  font-semibold">
          🛠️ Technologies
        </h2>
        <p>{project.technologies.join(', ')}</p>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl text-blue-500 font-semibold">✨ Features </h2>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>- {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
