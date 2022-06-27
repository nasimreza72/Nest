import "./StyledButton.scss";
export const StyledButton = ({text})=>{
    return (
        <div className="button-container">
            <input type="button" value={text}/>
        </div>
    )
}