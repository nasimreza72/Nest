import "./ErrorMessage.scss";

export default function ErrorMessage(props) {
  return (
    <div className="ErrorMessage">
      <div className="wrapper">
        <button onClick={() => props.setShowMessage(false)}>x</button>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
