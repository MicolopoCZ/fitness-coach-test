import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserType, getUser, updateUser, deleteUser } from "../../models/User";
import { useNavigate } from "react-router-dom";

// /user/857587676586
export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>();
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState(String);
  const [formData, setFormData] = useState(String);

  const load = async () => {
    const user = await getUser(id);
    if (user.status === 500) return setLoaded(null);
    if (user.status === 200) {
      setUser(user.data);
      setLoaded(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if(user.username === formData){
        const data = await deleteUser(user._id);
        if(data.status === 200) return redirectToSuccesPage(user._id);
        setInfo(data.msg);
        return;
    }
    setInfo("Špatně zadaný username");
  };

  const redirectToSuccesPage = (id: string) => {
    return navigate(`/deleteduser/${id}`);
  }

  useEffect(() => {
    load();
  }, []); //zavolá se při spuštění stránky

  if (!loaded) {
    return (
      <>
        <p>Načítá se uživatel</p>
      </>
    );
  }

  return (
    <>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Password: {user.password}</p>

      <form>
        <p>Pokud chcete smazat uživatele, napiště jeho username</p>
        <input required type="text" placeholder={user.username} onChange={handleChange}/>
        <button onClick={handleDelete}>Smazat uživatele</button>
        <p>{info}</p>
      </form>

      <Link to={`/updateuserform/${id}`}>
        <p>Aktualizovat uživatele</p>
      </Link>

      <Link to={"/"}>
        <p>Přejít na hlavní stránku</p>
      </Link>
    </>
  );
}
