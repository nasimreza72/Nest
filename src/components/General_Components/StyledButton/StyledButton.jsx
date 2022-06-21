import "./StyledButton.scss";
export const StyledButton = ({text})=>{
    return (
        <div className=" flex justify-start mb-10 mt-5">
            <input type="button" value={text}/>
        </div>
    )
}