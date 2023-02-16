import styles from "../styles/PastOrders.module.css";
import ProductSnapShot from "./ProductSnapShot";
import { useEffect, useState } from "react";
import moment from "moment"

export default function PastOrders(props) {
  const [pastOrders, setPastOrders] = useState([]);

  return (
    <div className={styles.main}>
      <h2> Past Orders</h2>
      <div className={styles.pastOrdersContainer}>{props.orders.length > 0 ? props.orders : "It's empty"}</div>
    </div>
  );
}
