import Bubble from "./Bubble"
import NavBar from "./NavBar"
import styles from "../styles/Favorites.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import ProductSnapShot from "./ProductSnapShot";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Favorites(){
    const [productList, setProductList] = useState([])
    const router = useRouter()
    const favList = useSelector(
        (state) => state.products.value.favoriteProducts
      );

    useEffect(() => {
        if(favList){
            setProductList(favList.map((data, i) =>
            <ProductSnapShot data={data} key={i} isInFav={true} />))
        }
    }, [favList])
    return (

    <main>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1>
            Favorites
        </h1>
        <div style={{width : "100%"}}>
        <div style={{ display: "flex", alignItems: "center", justifyContent : "center" }}>
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
          <div className={styles.favContent}>
            {productList}
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

    )
}