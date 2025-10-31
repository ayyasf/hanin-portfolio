import { Link } from "react-router-dom"
import { FaExternalLinkAlt, FaExpand, FaArrowUp } from "react-icons/fa"

const ProjectCard = ({ id, title, tech, image, demoLink }) => {
  return (
    <div className="bg-white dark:bg-bgdark rounded-lg shadow-md overflow-hidden group relative border border-gray-200 dark:border-gray-700 hover:shadow-lg w-full  ">
        {/* Project Image */}
      <div className="relative bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover transition-transform duration-300"
        />
        {/*Overlay*/}
        <div className="absolute inset-0 bg-[#00000080]  opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300 z-10">
          {/* Preview Button */}
          <button
            onClick={() => window.open(image, "_blank")}
            className="text-white text-[20px] p-3 rounded-full hover:bg-hovercolor transition-all duration-200 transform hover:scale-110"
          >
            <FaExpand />
          </button>

          {/* Demo Button */}
          <a
            href={demoLink}
            target="_blank"
            className="text-white text-[20px] p-3 rounded-full hover:bg-hovercolor transition-all duration-200 transform hover:scale-110">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      {/* Project Information*/}
      <div className="p-4">
        <h3 className=" text-[22px] font-semibold  text-mysecondary dark:text-white mb-2 ">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-mysecondary dark:text-gray-400 max-w-[70%]">
            {tech}
          </span>
          {/* demo link*/}
          <Link
            to={`/projectdetails/${id}`}
            className="text-myprimary border border-myprimary p-2 rounded-full hover:bg-hovercolor hover:text-white transition-all duration-200 transform hover:scale-110"
          >
            <FaArrowUp className="text-sm rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard