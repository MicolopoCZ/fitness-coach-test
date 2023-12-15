import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DeletedProduct() {
    const { id } = useParams();

    return (
        <>
        <p>Produkt {id} byl odstraněn!</p>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}