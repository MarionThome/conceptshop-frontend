import { productInFavsFromDB } from "../reducers/products";


export function getFavoritesFromDB(username, token, dispatch){
    if(username){
        fetch(`http://localhost:3000/users/favorites/${token}`, {
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
}