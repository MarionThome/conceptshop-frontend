import styles from "../styles/PastOrders.module.css";
import ProductSnapShot from "./ProductSnapShot";
import { useEffect, useState } from "react";

export default function PastOrders(props) {
  const [pastOrders, setPastOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/users/past-orders/${props.userToken}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          setPastOrders(
            data.orders.map((order) => {
              return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <p>{order.date}</p>
                    <div>
                      {order.products.map((item) => {
                        return (
                          <div>
                            <ProductSnapShot data = {item} buttonName = "check"/>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    Total: <span>{order.totalPrice} €</span>
                  </div>
                </div>
              );
            })
          );
        }
      });
  }, []);

  console.log(pastOrders);

  return (
    <div className={styles.main}>
      <h2> Past Orders</h2>
      <div className={styles.pastOrdersContainer}>{pastOrders}</div>
    </div>
  );
}
