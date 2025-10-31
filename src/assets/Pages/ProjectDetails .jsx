import { useParams } from "react-router-dom"
import { projects } from "../../Data/projectsArray"
import { FaArrowUp, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import ProjectsSlider from "../../Components/ProjectsSlider/ProjectsSlider"
import { useRef } from "react"

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === String(id))
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  if (!project) {
    return (
      <div className="p-6 text-center text-red-600 dark:text-red-400">
        <h2 className="text-xl font-semibold">The Project Not Found</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-10 sm:pt-16 md:pt-22 bg-white dark:bg-bgdark transition-colors duration-300">
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        {/*Project Details */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="w-full lg:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-2xl shadow-xl dark:shadow-gray-900/50 w-full h-auto object-cover transition-all duration-300"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-[28px] font-bold text-mysecondary dark:text-white transition-colors duration-300">
                {project.title}
              </h1>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank"
                className="text-myprimary border border-myprimary p-2 rounded-full hover:bg-hovercolor hover:text-white transition-all transform hover:scale-110">
                  <FaArrowUp className="text-xl rotate-45" />
                </a>
              )}
            </div>
            <div className="text-[#A6A6A6] dark:text-gray-400 text-sm">
              {project.date}
            </div>
            <div className="pt-3">
              <p className="text-mysecondary dark:text-gray-300 text-lg text-[18px] pb-[17px]">
                {project.details}
              </p>
              <ul className="text-mysecondary dark:text-gray-300 text-[18px]">
                <li><strong className="dark:text-white">Basic language: </strong>{project.tech}</li>
                <li className="pb-3 pt-3"><strong className="dark:text-white">Framework: </strong>{project.framework}</li>
                <li><strong className="dark:text-white">Library: </strong>{project.library}</li>
              </ul>
            </div>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="inline-block px-6 py-3 bg-myprimary hover:bg-hovercolor dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 font-medium text-center w-fit">
                GitHub Repo
              </a>
            )}
          </div>
        </div>
        {/* Slider Section */}
        <section className="py-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 ">
            <h2 className="text-[30px] md:text-[40px] font-bold mb-4 text-gray-800 dark:text-white text-center sm:text-left w-full sm:w-auto">
              The Best <span className="text-myprimary"> Projects</span>
            </h2>
          <div className="flex gap-4 justify-center sm:justify-end w-ful sm:w-auto">
        <button
          ref={prevRef}
          className="text-myprimary border border-myprimary p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
        <FaChevronLeft size={20}  />
        </button>
        <button
        ref={nextRef}
        className="bg-myprimary border  text-white hover:text-myprimary hover:bg-white  hover:border-myprimary  p-3 rounded-full ">
          <FaChevronRight size={20} />
          </button>
          </div>
        </div>
          <ProjectsSlider prevRef={prevRef} nextRef={nextRef} />
    </section>
  </div>
</div>
  )
}
export default ProjectDetails
