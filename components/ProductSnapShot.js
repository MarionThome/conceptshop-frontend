import Button from "./Button";
import styles from "../styles/ProductSnapShot.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { selectProductToShow } from "../reducers/products";

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
            name={"Buy now"}
            padding={"10px 20px"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
