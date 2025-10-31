import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import ProjectCard from "../ProjectCard/ProjectCard"
import { featuredProjects } from "../../Data/featuredProjects"

const ProjectsSlider = ({ prevRef, nextRef}) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: "prevRef.current",
        prevEl: "nextRef.current",
      }}
      onBeforeInit={(swiper) => {
        console.log(prevRef.current)
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
      }}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      className="pb-10"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }}
    >
      {featuredProjects.map((project) => (
        <SwiperSlide key={project.id} className="w-full">
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default ProjectsSlider
