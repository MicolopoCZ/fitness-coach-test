import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductType, getProduct, updateProduct } from "../../models/Product";
import { useEffect, useState } from "react";

export default function UpdateProductForm() {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState<ProductType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

const redirectToSuccesPage = (id: string) => {
    return navigate(`/updatedproduct/${id}`);
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handleUpdate = (e: React.FormEvent) => {
  e.preventDefault();
  sendForm();
}

const sendForm = async () => {
    const product = await updateProduct(id, formData);
    if(product.status === 201) return redirectToSuccesPage(product.data._id);
    setInfo(product.msg);
  }

  const load = async () => {
    const product = await getProduct(id);
    if(product.status === 500) return setLoaded(null);
    if(product.status === 200){
        setProduct(product.data)
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
        <p>Produkty nebyly nalezeny</p>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        </>
    )
}

  if (!loaded) {
    return (
      <>
        <p>Načítá se produkt</p>
      </>
    );
  }
  
  return(
    <>
        <Link to={"/"}>
            <p>Zpět na hlavní stránku</p>
        </Link>
        <p>Product: ${id}</p>
        <form>
            <input required type="text" name="name" placeholder="Zadejte jméno produktu" defaultValue={product.name} onChange={e => handleChange(e)}/>
            <input required type="number" name="price" placeholder="Zadejte cenu produktu" defaultValue={product.price} onChange={e => handleChange(e)}/>
            <input required type="number" name="quantity" placeholder="Zadejte množství produktu" defaultValue={product.quantity} onChange={e => handleChange(e)}/>
            <input required type="text" name="smallDescription" placeholder="Zadejte menší popisek produktu" defaultValue={product.smallDescription} onChange={e => handleChange(e)}/>
            <input required type="text" name="description" placeholder="Zadejte popisek produktu" defaultValue={product.description} onChange={e => handleChange(e)}/>
            <button onClick={handleUpdate}>
                Update Product
            </button>
            <p>{info}</p>
        </form>
    </>
  )
}
