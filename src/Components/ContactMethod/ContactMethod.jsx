const ContactMethod = ({ icon: Icon, title, info }) => {
  return (
    <div className="flex items-start gap-4 p-4 md:px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-full md:w-110">
      <button className=" w-12 h-12 bg-myprimary text-white rounded-full flex items-center justify-center text-xl transition-transform duration-300 hover:scale-110">
        <Icon />
      </button>
      <div className="flex flex-col">
        <span className=" text-[#92929D] dark:text-white">{title}</span>
        <span className="text-mysecondary dark:text-gray-300">{info}</span>
      </div>
    </div>
  )
}

export default ContactMethod