import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UpdatedBoot() {
    const { id } = useParams();

    return (
        <>
        <p>Boty byly aktualizovány!</p>
        <Link to={`/boot/${id}`}>
        <p>Podívat se na boty: {id}</p>
        </Link>
        <Link to={"/"}>
        <p>Vrátit se zpět na hlavní stránku</p>
        </Link>
        </>
    )
}