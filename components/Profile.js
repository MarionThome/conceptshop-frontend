import Bubble from "./Bubble";
import NavBar from "./NavBar";
import Button from "./Button";
import SignInSignUp from "./SignInSignUp";
import PastOrders from "./PastOrders";
import ProfileInfo from "./profileInfo";
import styles from "../styles/Profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";



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
          <div style={{width : !isLogged ? "50%" : "80%", margin : "auto", maxWidth : "1200px"}}>
            {!isLogged && <SignInSignUp />}
            {isLogged && <div style = {{display : "flex", justifyContent : "space-around"}}>
              <PastOrders userToken = {user.token}/>
              <ProfileInfo/>
              </div>}
          </div>
        </div>
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