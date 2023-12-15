import { UserType } from "../models/User";
import { Link } from "react-router-dom";


export default function UserLink(props: UserType){
    return(
        <>
        <p>Username: {props.username}</p>
        <Link to={`/user/${props._id}`}>
            <p>Prejit na uzivatele</p>
        </Link>
        </>
    )
}