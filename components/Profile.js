import Bubble from "./Bubble";
import NavBar from "./NavBar";
import SignInSignUp from "./SignInSignUp";
import PastOrders from "./PastOrders";
import ProfileInfo from "./profileInfo";
import ProductSnapShot from "./ProductSnapShot";
import styles from "../styles/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { productInFavsFromDB } from "../reducers/products";

import moment from "moment";

export default function Profile(props) {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const user = useSelector((state) => state.user.value);
  const [pastOrders, setPastOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.username) {
      setIsLogged(true);
      getPastOrders();
      
    } else {
      setIsLogged(false);
    }
  }, [user]);

  if(user.username){
  
    fetch(`http://localhost:3000/users/favorites/${user.token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          dispatch(productInFavsFromDB(data.favorites));
        }
      });
}


  const getPastOrders = () => {
    fetch(`http://localhost:3000/users/past-orders/${user.token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setPastOrders(
            data.orders.map((order) => {
              return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <p>{moment(new Date(order.date)).format("DD/MM/YYYY")}</p>
                    <p>
                      Total: <span>{order.totalPrice} €</span>
                    </p>
                    <div>
                      {order.products.map((item) => {
                        return (
                          <div>
                            <ProductSnapShot data={item} buttonName="check" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          );
        }
      });
  };


  return (
    <main>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1>Concept Store</h1>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          <div
            style={{
              width: !isLogged ? "50%" : "80%",
              margin: "auto",
              maxWidth: "1200px",
            }}
          >
            {!isLogged && <SignInSignUp />}
            {isLogged && (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <PastOrders orders={pastOrders} />
                <ProfileInfo
                  ordersNum={pastOrders.length}
                  token={user.token}
                  username={user.username}
                />
              </div>
            )}
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
