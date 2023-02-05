import Bubble from "./Bubble";
import NavBar from "./NavBar";
import ProductInCart from "./ProductInCart";
import Recap from "./Recap";
import styles from "../styles/Cart.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const router = useRouter();
  const cart = useSelector((state) => state.products.value.productsInCart);
  const [products, setProducts] = useState([]);

  console.log(cart);

  useEffect(() => {
    setProducts(
      cart.map((item, i) => {
        if (item.quantity > 0) {
          return <ProductInCart data={item} key={i} />;
        }
      })
    );
  }, [cart]);

  return (
    <main className={styles.main}>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1> Concept Store</h1>
        <div style={{zIndex : 1000}}>
          <div style={{ display: "flex", alignItems: "center" }}>
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
            {cart.length > 0 && <Recap/>}
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
