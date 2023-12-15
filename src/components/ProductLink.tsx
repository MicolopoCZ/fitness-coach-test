import { ProductType } from "../models/Product";
import { Link } from "react-router-dom";


export default function ProductLink(props: ProductType){
    return(
        <>
        <p>Name: {props.name}</p>
        <Link to={`/product/${props._id}`}>
            <p>Prejit na produkt</p>
        </Link>
        </>
    )
}