import NavBar from "./NavBar";
import Bubble from "./Bubble";
import ProductSnapShot from "./ProductSnapShot";
import styles from "../styles/Shop.module.css";
import { useEffect, useState } from "react";


export default function Shop() {
  const [productList, setProductList] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/products/all', {
        method : "GET", 
        headers : { 'Content-Type': 'application/json' }
      }).then(res => res.json()).then((data)=>{
        setProductList(data.products.map((data, i) =>
            <ProductSnapShot data={data} key={i}/> ))
      })
    }
    , [])

  return (
    <main className={styles.main}>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <div>
        <h1>Concept Store</h1>
        <h2> Anything.</h2>
        <h2>For everything.</h2>
        </div>
        <div className={styles.itemsContainer}>
            {productList}
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
