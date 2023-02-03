import { useSelector } from 'react-redux';

export default function Product(){
    const productSelected = useSelector((state) => state.products.value.productToShow);
    console.log(productSelected)

    return (
        <div>
            <p>{productSelected.name}</p>
        </div>
    )
}