import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../models/User";
import { UserType } from "../../models/User";
import { useEffect } from "react";

export default function CreateUserForm(){
    const [formData, setFormData] = useState<UserType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

    const redirectToSuccesPage = (id: string) => {
      return navigate(`/createduser/${id}`);
    }

    const sendForm = async () => {
      const user = await createUser(formData);
      if(user.status === 201) return redirectToSuccesPage(user.data._id);
      setInfo(user.msg);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    useEffect(() =>{
      console.log(formData);
    },[formData]);

    const handlePost = (e: React.FormEvent) => {
      e.preventDefault();
      sendForm();
    }

    return(
    <>
        <p>Create user form</p>
        <form>
            <input required type="text" name="username" placeholder="Zadejte uživatelské jméno" onChange={e => handleChange(e)}/>
            <input required type="radio" value="Male" name="gender" onChange={e => handleChange(e)}/>
            <input required type="radio" value="Female" name="gender" onChange={e => handleChange(e)}/>
            <input required type="number" name="phone" placeholder="Zadejte telefonní číslo" onChange={e => handleChange(e)}/>
            <input required type="password" name="password" placeholder="Zadejte přihlašovací heslo" onChange={e => handleChange(e)}/>
            <button onClick={handlePost}>
                Create User
            </button>
            <p>{info}</p>
        </form>
    </>
    );
}