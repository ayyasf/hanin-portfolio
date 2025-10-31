const Button = ({ href, label, icon = Icon, target = "_self", className = "" }) => {
    return (
    <a
        href={href}
        target={target}
        className={`inline-flex items-center gap-2 bg-myprimary dark:bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-hovercolor dark:hover:bg-blue-600 transition ${className}`}>
        {label} {icon}
    </a>
    )
}

export default Button;
