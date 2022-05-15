export const Button = ({text})=>{
    return (
        <div className=" flex justify-start mb-10 mt-5">
            <input className=" border-2 px-20 py-4 rounded-lg hover:bg-gray-100 hover:underline cursor-pointer text-lg" type="button" value={text}/>
        </div>
    )
}