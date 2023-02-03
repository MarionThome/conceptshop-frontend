export default function Button(props) {
  return (
    <button
      style={{
        padding: props.padding,
        backgroundColor: props.disabled ? "rgb(123,150,212, 0.5)" : props.backgroundColor || " rgb(123,150,212)"  ,
        borderWidth: 0,
        fontSize: "1.25rem",
        color:  props.color || "white" ,
        borderRadius: "50px",
        cursor: props.disabled ? "not-allowed":"pointer",
      }}
      disabled={props.disabled && true}
      onClick={() => props.handleClick()}
    >
      {props.name}
    </button>
  );
}
