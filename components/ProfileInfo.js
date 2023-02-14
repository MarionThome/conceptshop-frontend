import { useEffect } from "react"
import Button from "./Button";
import styles from "../styles/ProfileInfo.module.css"
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../reducers/user";

export default function ProfileInfo(){
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(resetUser())
    }
    
    return (
        <div className={styles.infoContent}>
            <h2>Info</h2>
            <Button name="log out" padding={"10px 20px"} handleClick = {handleLogOut}/>
        </div>
    )
}