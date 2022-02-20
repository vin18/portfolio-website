import { Link, useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Link to={project.slug} key={project.id}>
      <div className=" bg-gray-50 border-b-4 border-blue-500 text-gray-800 shadow-md rounded transition-all ease-in-out hover:-translate-y-1 cursor-pointer hover:shadow-xl">
        <img
          src={project.bannerImg}
          alt="shopeasy banner"
          className="rounded p-2 w-full"
        />
        <div className="px-4 py-3">
          <h4 className="text-xl font-semibold text-blue-500">
            {project.name}
          </h4>
          <p className="text-sm">{project.description}</p>
          <div className="text-sm mt-1">
            <span className="text-blue-500 font-semibold">Tech stack:</span>{' '}
            {project.technologies.join(', ')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
