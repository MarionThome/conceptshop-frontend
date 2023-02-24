import Bubble from "./Bubble";
import NavBar from "./NavBar";
import ProductInCart from "./ProductInCart";
import Recap from "./Recap";
import Modal from "./Modal";
import styles from "../styles/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { resetCart } from "../reducers/products";


export default function Cart() {
  const router = useRouter();
  const cart = useSelector((state) => state.products.value.productsInCart);
  const user = useSelector((state) => state.user.value)
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([]);
  const [modalisVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState();
  const dispatch  = useDispatch();

  console.log("CART", cart);

  useEffect(() => {
    cart.length > 0 && setTotalPrice(cart.reduce((acc, item) => {return (item.price * item.quantity) + acc}, 0))
    setProducts(
      cart.map((item, i) => {
        if (item.quantity > 0) {
          return <ProductInCart data={item} key={i} />;
        }
      })
    );
  }, [cart]);

  useEffect(() => {
    if(!user.username){
      setModal(<Modal name={'Login_Modal'} message = {`You need to be login to finalise your order!`}/>)
      return
    }
    setModal(<Modal name={'Checkout_Modal'} message = {`Thank you ${user.username.charAt(0).toUpperCase() + user.username.slice(1)}! 
    This is a work in progress, and there is no checkout method at the moment so it is free! You can find your order on your profile page :)`}/>)
  }, [user])

  const handleBuy = () => {
    console.log(user.username)
    if(user.username){
      fetch("http://localhost:3000/users/new-order", {
        method : "POST", 
        headers: { "Content-Type": "application/json" }, 
        body : JSON.stringify({token : user.token, products : cart, price : totalPrice})
      }).then(res => res.json()).then((data) => {
        if(data.result){
          dispatch(resetCart())
        }
      })
    }
    setModalVisible(true)
  }


  return (
    <main className={styles.main}>
      {modalisVisible && modal}
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1> Concept Store</h1>
        <div style={{zIndex : 1000}}>
          <div style={{ display: "flex", alignItems: "center", maxWidth: "900px" }}>
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
          <div className={styles.cartAndRecap}>
            <div>
              {cart.length > 0 ? (
                products
              ) : (
                <p> There is nothing in your cart yet </p>
              )}
            </div>
            {cart.length > 0 && <Recap handleBuy = {handleBuy} totalPrice = {totalPrice}/>}
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
  );
}
