import Button from "./Button";
import { useDispatch } from "react-redux";
import { selectProductToShow , removeProductFromCart } from "../reducers/products";
import { useRouter } from "next/router";
import styles from "../styles/ProductInCart.module.css"

export default function ProductInCart(props){
    const dispatch = useDispatch()
    const router = useRouter()
    const handleImgClick = (product) => {
        dispatch(selectProductToShow(product))
        router.push("/product")
    }

    const handleRemove = () => {
        dispatch(removeProductFromCart(props.data.name))
    }

    return (
    <div className={styles.productInCartContainer}>
        <img src={props.data.image} style={{cursor : "pointer"}} onClick={() => handleImgClick(props.data)}/>
        <div className={styles.productNameAndButton}>
        <h2>{props.data.name} (x {props.data.quantity})</h2>
        <Button name ={"Remove"} padding={"10px 20px"} handleClick={handleRemove}/>
        </div>
    </div>
    )
}