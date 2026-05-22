import { GoArrowRight, GoArrowUp } from "react-icons/go"
import { HiArrowUpRight } from "react-icons/hi2"
import Form from "../../Components/Form/Form"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa6"
import ContactMethod from "../../Components/ContactMethod/ContactMethod"
import SkillsCard from "../../Components/SkillsCard/SkillsCards"
import { projects } from "../../Data/projectsArray"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import { useContext, useEffect } from "react"
import Button from "../../Components/Button/Button"
import { ThemeContext } from "../../App"

const MainPage = ({ setActiveSection }) => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      })
      setActiveSection(current);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setActiveSection])

  const cardsData = [
    {
      title: "Front-End Developer",
      description:
        "Passionate about building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.",
    },
    {
      title: "Software Engineer",
      description:
        "Skilled in designing scalable software solutions with strong problem-solving and system architecture skills.",
    },
  ];

  return (
    <main className="bg-white dark:bg-bgdark text-gray-900 dark:text-white overflow-x-hidden">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen pt-24 sm:pt-24 md:pt-20 lg:pt-16 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-center bg-[url('/assets/image/Lines.png')] bg-cover bg-no-repeat relative overflow-hidden"
      >
        <div
          className="absolute left-0 top-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px]
            bg-gradient-to-r from-blue-100/60 to-transparent dark:from-blue-900/40 dark:to-transparent
            rounded-full blur-2xl z-[-1]"
        ></div>

        {/* Home Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-mysecondary dark:text-white">
            <span className="font-semibold">HEY,</span> I'm{" "}
            <span className="text-myprimary dark:text-blue-400">Hanin</span>
          </h1>
          <p className="text-lg text-[#43495B] mb-5 dark:text-white">
            I'm a passionate developer who loves building beautiful and functional web experiences. I specialize in{" "}
            <span className="text-myprimary">front-end development</span> and responsive design.
          </p>
          <Button href="#" label=" Download CV" icon={<HiArrowUpRight className="text-2xl" />} />
        </div>

        {/* Profile image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mb-10 sm:mb-0">
          <img
            src="/hanin-portfolio/assets/image/hanin1.png"
            alt="Hanin"
            className="w-full max-w-[24rem] sm:max-w-[26rem] h-auto object-cover -translate-y-6 z-10"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen py-16 px-4 sm:px-6 md:py-[94px] md:px-12 flex flex-col lg:flex-row justify-between gap-8 overflow-hidden">
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={theme === "dark" ? "/hanin-portfolio/assets/image/DarkTech.png" : "/hanin-portfolio/assets/image/tech.png"}
            alt="about"
            className="w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[32rem] h-auto object-cover rounded-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[30px] md:text-[40px] font-semibold mb-4 text-mysecondary dark:text-white">About Me</h2>
          <p className="text-lg text-mysecondary dark:text-white mb-6">
            I'm Hanin, a front-end developer who enjoys crafting clean interfaces and smooth user experiences. I specialize in modern web technologies and love turning ideas into interactive websites.
          </p>

          {/* Skills */}
          <div>
            {[
              { label: "HTML5", value: 95 },
              { label: "CSS3", value: 90 },
              { label: "JavaScript", value: 85 },
              { label: "React", value: 80 },
            ].map((skill, index) => (
              <div key={index} className="relative mb-4">
                <div className="flex justify-between">
                  <span className="text-lg mt-2 font-medium text-mysecondary dark:text-white">{skill.label}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative">
                  <div
                    className="bg-myprimary dark:bg-blue-400 h-3 rounded-full transition-all duration-500"
                    style={{ width:`${skill.value}%` }}
                  ></div>
                  <div
                    className="absolute top-[-30px] left-0 transform -translate-x-1/2 opacity-100 bg-myprimary text-white text-xs px-1 py-1 rounded pointer-events-none"
                    style={{ left:` ${skill.value}%` }}
                  >
                    {skill.value}%
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-myprimary rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section
        id="education"
        className="dark:bg-bgdark py-16 px-4 sm:px-6 md:py-[94px] md:px-12 flex flex-col items-center overflow-hidden"
      >
        <h2 className="text-[30px] md:text-[40px] font-semibold text-mysecondary dark:text-white mb-12 text-center md:text-left">
          Education & Experience
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-between gap-9 flex-wrap">
          {cardsData.map((card, index) => (
            <SkillsCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 px-4 sm:px-6 md:px-12 flex flex-col text-center overflow-hidden">
        <div className="w-full flex justify-end mb-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-myprimary hover:bg-hovercolor text-white p-3 rounded-2xl transition"
          >
            <GoArrowUp size={22} />
          </button>
        </div>
        <div className="relative w-full flex justify-center">
          <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-myprimary rounded-3xl z-0 w-[96%] md:w-[85%] mx-auto"></div>
          <div className="relative bg-[#583FBC] text-white rounded-3xl shadow-xl p-10 md:p-16 w-[96%] md:w-[85%] flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="flex flex-col text-center md:text-left md:w-2/3 justify-center"><h3 className="text-3xl md:text-[46px] font-semibold mb-4">Try me out, risk free!</h3>
              <p className="text-[18px] md:text-[20px]">
                If you’re not happy with the design after the first draft, I’ll refund your deposit,{" "}
                <span className="text-[21px] md:text-[22px] font-semibold">no questions asked</span>.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center mt-4 md:mt-0">
              <Button href="#contact" icon={<GoArrowRight size={26} />} label="Contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        className="min-h-screen scroll-mt-20 py-16 px-4 sm:px-6 md:py-[94px] md:px-12 bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left mb-8 gap-4 flex-wrap">
          <h2 className="text-[30px] md:text-[40px] max-w-99 font-semibold text-mysecondary dark:text-white">
            My Creative Works Latest <span className="text-myprimary">Projects</span>
          </h2>
          <Button
            href="https://github.com/ayyasf"
            target="_blank"
            label="View GitHub"
            icon={<HiArrowUpRight className="text-[18px]" />}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              tech={project.tech}
              image={project.image}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen scroll-mt-20 py-16 px-4 sm:px-6 md:py-[94px] md:px-12 dark:bg-gray-900 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <h2 className="text-[30px] md:text-[40px] font-semibold text-mysecondary dark:text-white text-center lg:text-left">
            Let's Discuss Your <span className="text-myprimary">Project</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col gap-4">
              <ContactMethod icon={FaPhoneAlt} title="Call Me" info="0981324572" />
              <ContactMethod icon={FaEnvelope} title="Email Me" info="haninayash997@gmail.com" />
              <ContactMethod icon={FaMapMarkerAlt} title="Address" info="Lattakia,Syria" />
            </div>
            <div className="lg:w-1/2">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default MainPage