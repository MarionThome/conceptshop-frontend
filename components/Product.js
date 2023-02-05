import { useSelector , useDispatch} from "react-redux";
import styles from "../styles/Product.module.css";
import Bubble from "./Bubble";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { addProductToCart, productInFavs} from '../reducers/products';
import CartModal from "./CartModal";
import { useEffect, useState } from "react";

export default function Product() {
  const [isFav, setIsFav] = useState(false)
  const [modalisVisible, setModalVisible] = useState(false)
  const dispatch  = useDispatch()
  
  const productSelected = useSelector(
    (state) => state.products.value.productToShow
  );

  const favList = useSelector(
    (state) => state.products.value.favoriteProducts
  );
  
  console.log("selected", productSelected)
  const  handleClick = () => {
    if(productSelected !== null){
      dispatch(addProductToCart({...productSelected, quantity : 1}))
      setModalVisible(true)
    }
  }

  useEffect(() => {
    if (favList){
      setIsFav(favList.find(e => e.name === productSelected.name))
    }
  }, [favList])


  return (
    <main className={styles.main}>
    {modalisVisible && <CartModal name={productSelected.name}/>}
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
            <div className={styles.buttonHeart}>
            <FontAwesomeIcon icon={faHeart} size ={"2x"} style={{marginRight : "20px"}} cursor={"pointer"} color={isFav && "#d4a054"} onClick={() => {dispatch(productInFavs(productSelected))}}/>
            <Button name ={"Add To Cart"} padding={"10px 20px"} disabled = {!productSelected.availability && true} handleClick={handleClick}/>
            </div>
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
