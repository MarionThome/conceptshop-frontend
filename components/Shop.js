import NavBar from "./NavBar";
import Bubble from "./Bubble";
import ProductSnapShot from "./ProductSnapShot";
import styles from "../styles/Shop.module.css";
import { useEffect, useState } from "react";
import products from "../products.json"

export default function Shop() {
    const [productList, setProductList] = useState([])
    
    useEffect(() => {
    setProductList(products.map((data, i) =>
        <ProductSnapShot data={data}/> ))
    }, [])

  return (
    <main className={styles.main}>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.titleContainer}>
        <div>
        <h1>Concept Store</h1>
        <h2> Anything.</h2>
        <h2>For everything.</h2>
        </div>
        <div className={styles.itemsContainer}>
            {productList}
        </div>
      <Bubble
        rotate={180}
        justify={"end"}
        align={"end"}
        bottom={"-350px"}
        right={"-350px"}
      />
      </div>
    </main>
  );
}
