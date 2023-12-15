import { useParams, useNavigate, Link } from "react-router-dom";
import { UserType, getUser, updateUser } from "../../models/User";
import { useEffect, useState } from "react";

export default function UpdateUserForm() {
    const { id } = useParams();
    const [user, setUser] = useState<UserType>();
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState<UserType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

const redirectToSuccesPage = (id: string) => {
    return navigate(`/updateduser/${id}`);
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handleUpdate = (e: React.FormEvent) => {
  e.preventDefault();
  sendForm();
}

const sendForm = async () => {
    const user = await updateUser(id, formData);
    if(user.status === 201) return redirectToSuccesPage(user.data._id);
    setInfo(user.msg);
  }

  const load = async () => {
    const user = await getUser(id);
    if(user.status === 500) return setLoaded(null);
    if(user.status === 200){
        setUser(user.data)
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
        <p>Uživatelé nebyli nalezeni</p>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        </>
    )
}

  if (!loaded) {
    return (
      <>
        <p>Načítá se uživatel</p>
      </>
    );
  }
  
  return(
    <>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        <p>User: ${id}</p>
        <form>
            <input required type="text" name="username" placeholder="Zadejte uživatelské jméno" defaultValue={user.username} onChange={e => handleChange(e)}/>
            <input required type="number" name="phone" placeholder="Zadejte telefonní číslo" defaultValue={user.phone} onChange={e => handleChange(e)}/>
            <input required type="password" name="password" placeholder="Zadejte přihlašovací heslo" defaultValue={user.password} onChange={e => handleChange(e)}/>
            <button onClick={handleUpdate}>
                Update User
            </button>
            <p>{info}</p>
        </form>
    </>
  )
}