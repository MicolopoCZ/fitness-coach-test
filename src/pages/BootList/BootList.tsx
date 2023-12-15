import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BootType, getBoots } from "../../models/Boot";
import BootLink from "../../components/BootLink";

export default function BootList() {
    const [boots, setBoots] = useState<BootType[]>();
    const [loaded, setLoaded] = useState(false);

    const load = async () => {
      const boots = await getBoots();
      if(boots.status === 500) return setLoaded(null);
      if(boots.status === 200){
        setBoots(boots.data);
        setLoaded(true);
      }
    }

    useEffect (() => {
        load();
    },[]);

    if(loaded == null){
        return(
            <>
            <p>Boty nebyly nalezeny</p>
            <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
            </Link>
            </>
        )
    }
    if(!loaded){
        return(
            <>
            <p>Načítám boty</p>
            <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
            </Link>
            </>
        )
    }

    return(
        <>
        {
            boots.map((boot, index) => (
                <BootLink key={index} {...boot}/>   //vezme každý prvek a vloží to na danou pozici
            ))
        }        
        <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
        </Link>
        </>
    )
}