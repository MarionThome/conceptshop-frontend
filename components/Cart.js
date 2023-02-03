import Bubble from "./Bubble";
import NavBar from "./NavBar";
import styles from "../styles/Cart.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ProductInCart from "./ProductInCart";
import { useEffect, useState } from "react";

export default function Cart() {
    const cart = useSelector((state) => state.products.value.productsInCart);
    const [products, setProducts] = useState([])

    console.log(cart)

    useEffect(() => {
        setProducts(cart.map((item, i) => {
            if(item.quantity > 0){
                return <ProductInCart data={item} key={i}/>
            }
        }))
    }, [cart])

  return (
    <main className={styles.main}>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1> Concept Store</h1>
        <div>
            <div>
                {products}
            </div>
            <div></div>
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
