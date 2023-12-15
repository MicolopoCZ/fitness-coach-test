import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CreatedProduct() {
    const { id } = useParams();

    return(
        <>
        <p>Produkt byl Vytvořen</p>
        <Link to={`/product/${id}`}>
            <p>Podívat se na produkt: {id}</p>
        </Link>
        <Link to={"/"}>
            <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}