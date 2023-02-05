import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from "../styles/NavBar.module.css";
import { Popover } from "antd";
import {useRouter} from "next/router";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function () {
const router = useRouter()
  const cart = useSelector((state) => state.products.value.productsInCart);

  return (
    <div className={styles.bar}>
      <FontAwesomeIcon icon={faUser} className={styles.icons} />
      <FontAwesomeIcon icon={faHeart}  className={styles.icons} onClick={() => router.push("/favorites")}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <FontAwesomeIcon
            icon={faBasketShopping}
    
            className={styles.icons}
            style={{ marginRight: "10px" }}
            onClick={() => router.push("/cart")}
          />
        <p style={{ marginRight: "20px" }}> {cart.length}</p>
      </div>
    </div>
  );
}
