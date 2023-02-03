import { useSelector } from "react-redux";
import styles from "../styles/Product.module.css";
import Bubble from "./Bubble";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Product() {
  const productSelected = useSelector(
    (state) => state.products.value.productToShow
  );

  return (
    <main className={styles.main}>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1>Concept Store</h1>
        <div className={styles.productContainer}>
          <img src={productSelected.image} />
          <div className={styles.productTitleDescription}>
            <h2>{productSelected.name}</h2>
            <p>{productSelected.description}</p>
            <div>
            <p style={{ color: !productSelected.availability && "red" }}>
              <span
                style={{
                  textDecoration: !productSelected.availability
                    ? "line-through"
                    : "none",
                }}
              >
                {productSelected.price}
              </span>{" "}
              €{!productSelected.availability && " out of order"}
            </p>
            <Button name ={"Add To Cart"}/>
            </div>
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
