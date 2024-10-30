export default function Button({className,functions,children}){

    return <>
    <button className={` hover:opacity-50 p-2 rounded-xl text-white ${className}`}> {children} </button>
    </>
}