import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UpdatedProduct() {
    const { id } = useParams();

    return (
        <>
        <p>Produkt byl aktualizován!</p>
        <Link to={`/product/${id}`}>
        <p>Podívat se na produkt: {id}</p>
        </Link>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}