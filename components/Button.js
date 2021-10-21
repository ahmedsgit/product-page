export default function Button({
    children ,type,onClick,buttonStyle,buttonSize
}) {
    return (
        <button className='flex flex-row space-x-2 my-5 text-white bg-yellow-600 py-3 px-5 rounded-md font-semibold' type={type} onClick={onClick}>
            {children}
        </button>
    )
}
