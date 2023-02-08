import Bubble from "./Bubble";
import NavBar from "./NavBar";
import Button from "./Button";
import SignInSignUp from "./SignInSignUp";
import styles from "../styles/Profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../reducers/user";


export default function Profile(props){
    const router = useRouter()
    const [isLogged, setIsLogged] = useState(false)
    const user = useSelector(
        (state) => state.user.value
      );
    const dispatch = useDispatch()

    useEffect(() => {
        if(user.username){
            setIsLogged(true)
        }
        else{
            setIsLogged(false)
        }
    },[user])

    const handleLogOut = () => {
        dispatch(resetUser())
    }
    
    return(
        <main>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1>
            Concept Store
        </h1>
        <div style={{width : "100%"}}>
        <div style={{ display: "flex", alignItems: "center", justifyContent : "center" }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ marginRight: "10px" }}
            />
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/shop");
              }}
            >
              return to the store
            </p>
          </div>
          <div style={{width : "50%", margin : "auto"}}>
            {!isLogged && <SignInSignUp />}
          </div>
        </div>
            {isLogged && <Button name="log out" padding={"10px 20px"} handleClick = {handleLogOut}/>}
      </div>
      <Bubble
        rotate={180}
        justify={"end"}
        align={"end"}
        bottom={"-350px"}
        right={"-350px"}
      />
    </main>  

    )
}