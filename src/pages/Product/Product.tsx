import { Link, redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductType, getProduct, updateProduct, deleteProduct } from "../../models/Product";



export default function Product(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductType>();
    const [loaded, setLoaded] = useState(false);
    const [info, setInfo] = useState(String);
    const [formData, setFormData] = useState(String);

    const load = async () => {
      const product = await getProduct(id);
      if(product.status === 500) return setLoaded(null);
      if(product.status === 200){
        setProduct(product.data);
        setLoaded(true);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(e.target.value);
    };

    const handleDelete = async (e: React.FormEvent) =>{
        e.preventDefault();
        if(product.name === formData){
            const data = await deleteProduct(product._id);
            if(data.status === 200) return redirectToSuccesPage(product._id);
            setInfo(data.msg);
            return;
        }
        setInfo("Špatně zadaný name")
    }

    const redirectToSuccesPage = (id: string) => {
      return navigate(`/deletedproduct/${id}`);
    }

    useEffect(() => {
        load();
    },[])

    if(!loaded){
        return(
            <>
                <p>Načítá se produkt</p>
            </>
        )
    }

    return(
        <>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Small Description: {product.smallDescription}</p>
        <p>Description: {product.description}</p>

        <form>
            <p>Pokud chcete smazat produkt, napište jeho name</p>
            <input required type="text" placeholder={product.name} onChange={handleChange}/>
            <button onClick={handleDelete}>Smazat Produkt</button>
            <p>{info}</p>
        </form>

        <Link to={`/updateproductform/${id}`}>
            <p>Aktualizovat produkt</p>
        </Link>
        <Link to={"/"}>
            <p>Přejít na hlavní stránku</p>
        </Link>
        </>
    )
}
