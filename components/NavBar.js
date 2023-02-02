import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/NavBar.module.css"


export default function(props){
    return (
        <div className={styles.bar}>
           <FontAwesomeIcon icon={faUser} />
           <FontAwesomeIcon icon={faHeart} />
           <FontAwesomeIcon icon={faBasketShopping} />
        </div>
    )
}