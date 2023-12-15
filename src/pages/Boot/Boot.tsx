import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BootType, getBoot, updateBoot, deleteBoot } from "../../models/Boot";
import { useNavigate } from "react-router-dom";

// /boot/857587676586
export default function Boot() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boot, setBoot] = useState<BootType>();
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState(String);
  const [formData, setFormData] = useState(String);

  const load = async () => {
    const boot = await getBoot(id);
    if (boot.status === 500) return setLoaded(null);
    if (boot.status === 200) {
      setBoot(boot.data);
      setLoaded(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if(boot.bootsName === formData){
        const data = await deleteBoot(boot._id);
        if(data.status === 200) return redirectToSuccesPage(boot._id);
        setInfo(data.msg);
        return;
    }
    setInfo("Špatně zadaný bootsName");
  };

  const redirectToSuccesPage = (id: string) => {
    return navigate(`/deletedboot/${id}`);
  }

  useEffect(() => {
    load();
  }, []); //zavolá se při spuštění stránky

  if (!loaded) {
    return (
      <>
        <p>Načítájí se boty</p>
      </>
    );
  }

  return (
    <>
      <p>bootsName: {boot.bootsName}</p>
      <p>Color: {boot.color}</p>
      <p>Size: {boot.size}</p>
      <p>Style: {boot.style}</p>
      <p>Description: {boot.bootsDescription}</p>
      <p>Brand: {boot.brand}</p>

      <form>
        <p>Pokud chcete smazat boty, napiště jméno bot</p>
        <input required type="text" placeholder={boot.bootsName} onChange={handleChange}/>
        <button onClick={handleDelete}>Smazat uživatele</button>
        <p>{info}</p>
      </form>

      <Link to={`/updatebootform/${id}`}>
        <p>Aktualizovat boty</p>
      </Link>

      <Link to={"/"}>
        <p>Přejít na hlavní stránku</p>
      </Link>
    </>
  );
}
