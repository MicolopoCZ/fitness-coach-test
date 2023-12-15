import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CreatedBoot() {
    const { id } = useParams();

    return (
        <>
        <p>Uživatel byl vytvořen!</p>
        <Link to={`/boot/${id}`}>
        <p>Podívat se na botu: {id}</p>
        </Link>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}