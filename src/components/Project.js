const Project = ({ project }) => {
  return (
    <div
      key={project.id}
      className=" bg-gray-50 border-b-4 border-blue-500 text-gray-800 shadow-md rounded transition-all ease-in-out hover:-translate-y-1 cursor-pointer hover:shadow-xl"
    >
      <img src={project.bannerImg} alt="shopeasy banner" className="rounded" />
      <div className="px-4 py-3">
        <h4 className="text-xl font-semibold text-blue-500">{project.name}</h4>
        <p className="text-sm ">{project.description}</p>

        <div className="flex items-center text-xs mt-2">
          <button className="mr-4 bg-blue-200 py-2 px-4 rounded">Demo</button>
          <button className="mr-4 bg-blue-200 py-2 px-4 rounded">Code</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
