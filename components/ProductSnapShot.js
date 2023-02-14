import Button from "./Button";
import { useSelector , useDispatch} from "react-redux";
import { productInFavs} from '../reducers/products';
import styles from "../styles/ProductSnapShot.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { selectProductToShow } from "../reducers/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProductSnapShot(props) {
  const dispatch = useDispatch();
  const router = useRouter(); 
  const [image, setImage] = useState("");

  useEffect(() => {
    const fileImg = require(`../assets/${props.data.name}.png`);
    setImage(fileImg.default.src);
  }, []);

  const handleClick = () => {
    dispatch(selectProductToShow({...props.data, image : image}))
    router.push(`/product/`);
  };

  return (
    <div className={styles.infosContainer}>
      <img src={image} />
      <div className={styles.itemInfos}>
        <h3>{props.data.name}</h3>
        <p>{props.data.description}</p>
        <p style={{ color: !props.data.availability && "red" }}>
          <span
            style={{
              textDecoration: !props.data.availability
                ? "line-through"
                : "none",
            }}
          >
            {props.data.price}
          </span>{" "}
          €{!props.data.availability && " out of order"}
        </p>
        <div>
          <Button
            name={props.buttonName || "Buy now"}
            padding={"10px 20px"}
            handleClick={handleClick}
          />
        {props.isInFav && <FontAwesomeIcon icon={faHeart} size ={"2x"} style={{marginLeft : "20px"}} cursor={"pointer"} color={"#d4a054"} onClick={() => {dispatch(productInFavs(props.data))}}/>}
        </div>
      </div>
    </div>
  );
}
