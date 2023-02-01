export default function Button(props){
    return (
        <button style={{
            padding : "20px 40px",
            backgroundColor : "#7b96d4",
            borderWidth : 0, 
            fontSize : "1.5rem",
            color : "white", 
            borderRadius : "50px",
            cursor : "pointer"
        }} onClick = {() => props.handleClick()}>
            {props.name}
        </button>
    )
}