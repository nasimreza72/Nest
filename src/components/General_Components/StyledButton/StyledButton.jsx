import "./StyledButton.scss";
export const StyledButton = ({text,onClick})=>{
    return (
        <div className="button-container">
            <input onClick={()=>onClick()} type="button" value={text}/>
            {/* <input type="button" value={text}/> */}
        </div>
    )
}