 import bubbleImg from '../assets/bubble.png'
 
 export default function Bubble(props){
    return(
        <div style = {{
            position : "absolute",
            top : props.top, 
            bottom : props.bottom, 
            right : props.right, 
            left : props.left, 
        }}>
            <img src = {bubbleImg.src}
            style = {{
            maxWidth : "800px",
            height : "auto", 
            transform : `rotate(${props.rotate}deg)`}}/>
        </div>
    )
}