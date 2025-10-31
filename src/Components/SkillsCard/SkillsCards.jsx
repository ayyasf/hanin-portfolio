const SkillsCard = ({ title, description }) => {
    return (
        <div className="relative flex-1 bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full flex justify-center">
                <div className="relative w-0.5 h-full border-l-2 border-dashed border-[#282938] dark:border-white">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-myprimary rounded-full"></div>
            </div>
        </div>
        <h3 className="text-2xl font-semibold text-myprimary mb-3">{title}</h3>
        <p className="text-lg text-[#98A2B3] ">{description}</p>
    </div>
    )
}
export default SkillsCard