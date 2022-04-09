const HeaderItem = (props) => {
    return (
    <div className="group flex flex-col 
    items-center cursor-pointer w-16 sm:w-20
    hover:text-blue-400">
        <props.Icon className="h-10 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{props.title}</p>
    </div>
    )
}

export default HeaderItem
