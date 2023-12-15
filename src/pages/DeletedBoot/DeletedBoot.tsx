import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DeletedBoot() {
    const { id } = useParams();

    return (
        <>
        <p>Boty {id} byly odstraněny!</p>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}