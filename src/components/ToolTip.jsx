const Tooltip = ({ message, children, navLink }) => {
    return (
        <div className="group relative flex">
            {children}
            <span className={`absolute flex items-center gap-2 left-full ml-2 top-1/2 -translate-y-1/2 scale-0 transition-all rounded ${navLink ? "bg-gray-300 dark:bg-gray-600" : "bg-gray-800 dark:bg-gray-50"} p-2 text-xs group-hover:scale-100 whitespace-nowrap`}>


                {message}
                <span className={`text-xs ${navLink ? "bg-red-600" : "bg-green-500"} h-1 w-1`}></span>
            </span>
        </div>
    )
}

export default Tooltip;