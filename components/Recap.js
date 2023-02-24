
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Button from "./Button";
import styles from "../styles/Recap.module.css"


export default function Recap(props){
    const [recapList, setRecapList] = useState([])
    const cart = useSelector((state) => state.products.value.productsInCart);

    useEffect(() => {
        setRecapList(cart.map((e) => {
            if(e.quantity > 0){
                return (
                    <div>
                        <h3>{e.name} (x{e.quantity})</h3>
                        <p>{e.quantity * e.price} €</p>
                    </div>
                )
            }
        }))
        
    }, [cart])
    
    return(
        <div className={styles.recapContent}>
            <h1> Recap </h1>
            <div>
                {cart.length > 0 && recapList}
            </div>
            <h2>Total</h2>
            <p> {props.totalPrice} € </p>
            <Button name ={"Buy"} padding={"10px 50px"} backgroundColor={"#d4a054"} color={"white"} handleClick = {props.handleBuy}/>
        </div>
    )
}