import { useEffect, useState } from "react"
import Button from "./Button";
import styles from "../styles/ProfileInfo.module.css"
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../reducers/user";
import profilePic from "../assets/profile.png"


export default function ProfileInfo(props){
    const [image, setImage] = useState(profilePic.src)
    const [favs, setFavs] = useState(0)
    const dispatch = useDispatch()
    console.log(image)
    const handleLogOut = () => {
        dispatch(resetUser())
    }

    useEffect(() => {
        fetch(`http://localhost:3000/users/favorites/${props.token}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then(res => res.json()).then((data) => {
            if(!data.result){
                return
            }
            setFavs(data.favorites.length)
          })
    }, [])
    
    return (
        <div className={styles.infoContent}>
            <h2>{props.username.charAt(0).toUpperCase() + props.username.slice(1)}</h2>
            <img src={image} />
            <Button name="Update" padding={"10px 20px"}  backgroundColor = "#d4a054"/>
            <div>
                <h3>Orders</h3>
                <p>{props.ordersNum}</p>
                <h3>Liked</h3>
                <p>{favs}</p>
            </div>
            <Button name="Log out" padding={"10px 20px"} handleClick = {handleLogOut}/>
        </div>
    )
}