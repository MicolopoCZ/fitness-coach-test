import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBoot } from "../../models/Boot";
import { BootType } from "../../models/Boot";
import { Link } from "react-router-dom";

export default function CreateBootForm(){
    const [formData, setFormData] = useState<BootType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

    const redirectToSuccesPage = (id: string) => {
      return navigate(`/createdboot/${id}`);
    }

    const sendForm = async () => {
      const boot = await createBoot(formData);
      if(boot.status === 201) return redirectToSuccesPage(boot.data._id);
      setInfo(boot.msg);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handlePost = (e: React.FormEvent) => {
      e.preventDefault();
      sendForm();
    }

    return(
    <>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        <p>Create boot form</p>
        <form>
            <input required type="text" name="bootsName" placeholder="Zadejte jméno bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="color" placeholder="Zadejte barvu bot" onChange={e => handleChange(e)}/>
            <input required type="number" name="size" placeholder="Zadejte velikost bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="style" placeholder="Zadejte styl bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="bootsDescription" placeholder="Zadejte popisek bot" onChange={e => handleChange(e)}/>
            <input required type="text" name="brand" placeholder="Zadejte značku bot" onChange={e => handleChange(e)}/>
            <button onClick={handlePost}>
                Create Boots
            </button>
            <p>{info}</p>
        </form>
    </>
    );
}