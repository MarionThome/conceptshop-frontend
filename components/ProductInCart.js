import Button from "./Button";
import { useDispatch } from "react-redux";
import { selectProductToShow , removeProductFromCart } from "../reducers/products";
import { useRouter } from "next/router";

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

    console.log("YO",props.data.image)

    return (<div>
        <img src={props.data.image} style={{cursor : "pointer"}} onClick={() => handleImgClick(props.data)}/>
        <div>
        <p>{props.data.name} (x {props.data.quantity})</p>
        <Button name ={"Remove"} padding={"10px 20px"} handleClick={handleRemove}/>
        </div>
    </div>)
}