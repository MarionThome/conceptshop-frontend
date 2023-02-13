import styles from "../styles/CartModal.module.css";
import Button from "./Button";
import {useRouter} from 'next/router'

export default function Modal(props) {
    const router = useRouter()

    const handleGoToCart = () => {
        router.push("/cart")
    }
    const handleGoToShop = () => {
        router.push("/shop")
    }
  return (
    <div>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
            <p>{props.message}</p>
            <div className={styles.buttons}>
                <Button name = "Continue shopping" padding={"10px 20px"} backgroundColor={"#d4a054"} color={"white"} handleClick={handleGoToShop}/>
                <Button name = {props.name === "Cart_Modal" ? "Go to cart" : ""} padding={"10px 20px"} handleClick={handleGoToCart}/>
            </div>
        </div>
      </div>
    </div>
  );
}
