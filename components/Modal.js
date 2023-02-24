import styles from "../styles/CartModal.module.css";
import Button from "./Button";
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";

export default function Modal(props) {
  const [modalName, setModalName] = useState(props.name)
  const [buttonName1, setButtonName1] = useState("")
  const [buttonName2, setButtonName2] = useState("")
  const [action1, setAction1] = useState()
  const [action2, setAction2] = useState()

    const router = useRouter()

    const handleGoToCart = () => {
        router.push("/cart")
    }
    const handleGoToShop = () => {
        router.push("/shop")
    }
    const handleGoToProfile = () => {
      router.push("/profile")
    }

  useEffect(() => {
    if(props.name === "Cart_Modal"){
      setButtonName1("Go to cart")
      setButtonName2("Continue shopping")
      return
    }
    if(props.name === "Login_Modal"){
      setButtonName1("Sign in")
      setButtonName2("Continue shopping")
      return
    }
    if(props.name === "Checkout_Modal"){
      setButtonName1("Go to Profile")
      setButtonName2("Continue shopping")
      return
    }
  }, [modalName])
  return (
    <div>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
            <p>{props.message}</p>
            <div className={styles.buttons}>
                <Button name = {buttonName1} padding={"10px 20px"} backgroundColor={"#d4a054"} color={"white"} handleClick={props.name === "Cart_Modal" ? handleGoToCart : handleGoToProfile  }/>
                <Button name = {buttonName2} padding={"10px 20px"} handleClick={handleGoToShop}/>
            </div>
        </div>
      </div>
    </div>
  );
}
