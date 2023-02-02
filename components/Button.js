export default function Button(props){
    return (
        <button style={{
            padding : props.padding,
            backgroundColor : "#7b96d4",
            borderWidth : 0, 
            fontSize : "1.25rem",
            color : "white", 
            borderRadius : "50px",
            cursor : "pointer"
        }} onClick = {() => props.handleClick()}>
            {props.name}
        </button>
    )
}