import { useSelector , useDispatch} from "react-redux";
import styles from "../styles/Product.module.css";
import Bubble from "./Bubble";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { addProductToCart, productInFavs} from '../reducers/products';
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { getFavoritesFromDB } from "../module/getFavoritesFromDB";


export default function Product() {
  const [isFav, setIsFav] = useState(false)
  const [modalisVisible, setModalVisible] = useState(false);
  const dispatch  = useDispatch()
  
  const productSelected = useSelector(
    (state) => state.products.value.productToShow
  );

  const favList = useSelector(
    (state) => state.products.value.favoriteProducts
  );

  const user = useSelector(
    (state) => state.user.value
  );
  

  const  handleClick = () => {
    if(productSelected !== null){
      dispatch(addProductToCart({...productSelected, quantity : 1}))
      setModalVisible(true)
    }
  }

  useEffect(() => {
    getFavoritesFromDB(user.username, user.token, dispatch)
  }, [])

  useEffect(() => {
    if (favList){
      setIsFav(favList.find(e => e.name === productSelected.name))
    }
  }, [favList])

  const handleFav = () => {
    if(!isFav && user.username){
      fetch("http://localhost:3000/users/new-fav", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: user.token,
          product: productSelected,
        })}).then(res => res.json()).then((data) => {
          console.log(data.result)
        })
      }
      if(isFav && user.username){
        console.log(productSelected._id)
        fetch("http://localhost:3000/users/delete-fav", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: user.token,
          id: productSelected._id,
        })}).then(res => res.json()).then((data) => {
   
          if(data.result){
            console.log(data.result)
          }
        })
      }
      dispatch(productInFavs(productSelected))
    }
  


  return (
    <main className={styles.main}>
    {modalisVisible && <Modal name={'Cart_Modal'} message = {`Thank you ! ${productSelected.name} has been added to your cart !`}/>}
    
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
            <FontAwesomeIcon icon={faHeart} size ={"2x"} style={{marginRight : "20px"}} cursor={"pointer"} color={isFav && "#d4a054"} onClick={() => handleFav()}/>
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
