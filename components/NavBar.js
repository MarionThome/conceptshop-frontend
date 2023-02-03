import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from "../styles/NavBar.module.css";
import { Popover } from "antd";
import {useRouter} from "next/router";

export default function () {
const router = useRouter()
  const cart = useSelector((state) => state.products.value.productsInCart);

  return (
    <div className={styles.bar}>
      <FontAwesomeIcon icon={faUser} size={"2x"} className={styles.icons} />
      <FontAwesomeIcon icon={faHeart} size={"2x"} className={styles.icons} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <FontAwesomeIcon
            icon={faBasketShopping}
            size={"2x"}
            className={styles.icons}
            style={{ marginRight: "10px" }}
            onClick={() => router.push("/cart")}
          />
        <p style={{ marginRight: "20px" }}>{cart.length}</p>
      </div>
    </div>
  );
}
