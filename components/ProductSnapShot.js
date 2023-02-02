import Button from "./Button";
import styles from "../styles/ProductSnapShot.module.css";
import { useEffect, useState } from "react";

export default function ProductSnapShot(props) {
  const [image, setImage] = useState("");
  useEffect(() => {
    const fileImg = require(`../assets/${props.data.name}.png`);
    console.log(fileImg.default.src);

    setImage(fileImg.default.src);
  }, []);
  return (
    <div className={styles.infosContainer}>
      <img src={image} />
      <div className={styles.itemInfos}>
        <h3>{props.data.name}</h3>
        <p>{props.data.description}</p>
        <p style={{color : !props.data.availability && "red" }}>
          <span style={{ textDecoration: !props.data.availability ? "line-through" : "none"}}>{props.data.price}</span> €
          {!props.data.availability && " out of order"}
        </p>
        <div>
          <Button name={"Buy now"} padding={"10px 20px"} />
        </div>
      </div>
    </div>
  );
}
