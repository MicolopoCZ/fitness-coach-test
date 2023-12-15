import { BootType } from "../models/Boot";
import { Link } from "react-router-dom";


export default function UserLink(props: BootType){
    return(
        <>
        <p>bootsName: {props.bootsName}</p>
        <Link to={`/boot/${props._id}`}>
            <p>Prejit na boty</p>
        </Link>
        </>
    )
}