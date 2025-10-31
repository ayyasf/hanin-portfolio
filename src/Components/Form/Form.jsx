const Form = () => {
  return (
    <form className="w-full max-w-4xl mx-auto  flex flex-col gap-6">
      {/* Full Name  */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="flex-1 text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary"
        />
         {/* Email  */}
        <input
          type="email"
          placeholder="Email"
          className="flex-1 text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary"
        />
      </div>
      {/* Phone Number */}
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary"
        />
      </div>
      {/* Message */}
      <div>
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full text-[#92929D] p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-myprimary resize-none"
        ></textarea>
      </div>
      {/* button send */}
      <div className=" text-center md:text-left">
        <button
          type="submit"
          className="bg-myprimary hover:bg-hovercolor text-[14px] text-white px-6 py-3 rounded-md transition"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
export default Form