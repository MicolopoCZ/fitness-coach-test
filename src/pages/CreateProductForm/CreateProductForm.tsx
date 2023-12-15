import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProduct } from "../../models/Product";
import { ProductType } from "../../models/Product";
import { Link } from "react-router-dom";

export default function CreateProductForm(){
    const [formData, setFormData] = useState<ProductType>();
    const [info, setInfo] = useState(String);
    const navigate = useNavigate();

    const redirectToSuccesPage = (id: string) => {
      return navigate(`/createdproduct/${id}`);
    }

    const sendForm = async () => {
      const product = await createProduct(formData);
      if(product.status === 201) return redirectToSuccesPage(product.data._id);
      setInfo(product.msg);
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData ({...formData, [e.target.name]: e.target.value})
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
        <p>Create Product form</p>
        <form>
            <input type="text" name="name" placeholder="Zadejte jméno produktu" onChange={e => handleChange(e)}/>
            <input type="number" name="price" placeholder="Zadejte cenu produktu" onChange={e => handleChange(e)}/>
            <input type="number" name="quantity" placeholder="Zadejte množství produktu" onChange={e => handleChange(e)}/>
            <input type="text" name="smallDescription" placeholder="Zadejte parametry produktu" onChange={e => handleChange(e)}/>
            <input type="text" name="description" placeholder="Zadejte popis produktu" onChange={e => handleChange(e)}/>
            <button onClick={handlePost}>
                Create Product
            </button>
            <p>{info}</p>
        </form>
        </>
    )
}
