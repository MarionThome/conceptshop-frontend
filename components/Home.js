import styles from '../styles/Home.module.css';
import Bubble from './Bubble'
import light from '../assets/light.png'
import Button from './Button';
import {useRouter} from 'next/router'

function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/shop")
  }
  return (
      <main className={styles.main} >
        <Bubble top = {"-300px"} left = {"-350px"} rotate = {10}/>
        <div className={styles.elemContainer}>
          <img src = {light.src}/>
          <div className={styles.titlesButton}>
          <h1>Concept Store</h1>
          <h2> Anything.</h2>
          <h2>For everything.</h2>
          <div className={styles.buttonContainer}>
            <Button name = {"shop"} padding = {"20px 40px"} handleClick = {handleClick}/>
          </div>
          </div>
        </div>
        <Bubble rotate={180} justify={"end"} align={"end"} bottom={"-300px"} right={"-300px"}/>
      </main>
  );
}

export default Home;
