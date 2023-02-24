import {useState} from "react";

export default function Button(props) {
  const [isHover, setIsHover] = useState()

  
  const handleMouseEnter = () => {
    setIsHover(true);
 };
 const handleMouseLeave = () => {
    setIsHover(false);
 };

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
        boxShadow: !isHover && "rgba(50, 50, 93, 0.45) 0px 2px 5px -1px, rgba(0, 0, 0, 0.5) 0px 1px 3px -1px"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={props.disabled && true}
      onClick={() => props.handleClick()}
    >
      {props.name}
    </button>
  );
}
