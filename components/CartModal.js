import styles from "../styles/CartModal.module.css";
import Button from "./Button";
import {useRouter} from 'next/router'

export default function CartModal(props) {
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
            <p>Thank you ! <span>{props.name}</span>  has been added to your cart !</p>
            <div className={styles.buttons}>
                <Button name = "Continue shopping" padding={"10px 20px"} backgroundColor={"white"} color={"#2f356d"} handleClick={handleGoToShop}/>
                <Button name = "Go to cart" padding={"10px 20px"} handleClick={handleGoToCart}/>
            </div>
        </div>
      </div>
    </div>
  );
}
