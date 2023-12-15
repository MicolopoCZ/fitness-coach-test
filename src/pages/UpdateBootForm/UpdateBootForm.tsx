import { useParams, useNavigate, Link } from "react-router-dom";
import { BootType, getBoot, updateBoot } from "../../models/Boot";
import { useEffect, useState } from "react";

export default function UpdateBootForm() {
    const { id } = useParams();
    const [boot, setBoot] = useState<BootType>();
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState<BootType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

const redirectToSuccesPage = (id: string) => {
    return navigate(`/updatedboot/${id}`);
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handleUpdate = (e: React.FormEvent) => {
  e.preventDefault();
  sendForm();
}

const sendForm = async () => {
    const boot = await updateBoot(id, formData);
    if(boot.status === 201) return redirectToSuccesPage(boot.data._id);
    setInfo(boot.msg);
  }

  const load = async () => {
    const boot = await getBoot(id);
    if(boot.status === 500) return setLoaded(null);
    if(boot.status === 200){
        setBoot(boot.data)
        setLoaded(true);
        return;
    }
  }

  useEffect(() => {
    load();
  },[])

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

  if (!loaded) {
    return (
      <>
        <p>Načítájí se boty</p>
      </>
    );
  }
  
  return(
    <>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        <p>Boots: ${id}</p>
        <form>
            <input required type="text" name="bootsName" placeholder="Zadejte jméno bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="color" placeholder="Zadejte barvu bot" onChange={e => handleChange(e)}/>
            <input required type="number" name="size" placeholder="Zadejte velikost bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="style" placeholder="Zadejte styl bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="bootsDescription" placeholder="Zadejte popisek bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="brand" placeholder="Zadejte značku bot" onChange={e => handleChange(e)}/>
            <button onClick={handleUpdate}>
                Update Boots
            </button>
            <p>{info}</p>
        </form>
    </>
  )
}