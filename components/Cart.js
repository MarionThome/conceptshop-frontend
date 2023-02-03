import Bubble from "./Bubble";
import NavBar from "./NavBar";
import styles from "../styles/Cart.module.css"

export default function Cart() {



  return (
    <main className={styles.main}>
      <Bubble top={"-350px"} left={"-350px"} rotate={10} />
      <NavBar />
      <div className={styles.content}>
        <h1> Concept Store</h1>
        <div>

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