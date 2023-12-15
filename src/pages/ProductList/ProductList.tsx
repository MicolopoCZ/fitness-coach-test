import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductType, getProducts } from "../../models/Product";
import ProductLink from "../../components/ProductLink";

export default function ProductList(){
    const [products, setProducts] = useState<ProductType[]>();
    const [loaded, setLoaded] = useState(false);

    const load = async () => {
      const products = await getProducts();
      if(products.status === 500) return setLoaded(null);
      if(products.status === 200){
        setProducts(products.data);
        setLoaded(true);
      }
    }

    useEffect(() => {
        load();
    },[]);

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

    if(!loaded){
        return(
             <>
             <p>Načítám Produkt</p>
             <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
             </Link>
             </>
        )
    }

    return(
        <>
        {
             products.map((product, index) => (
                <ProductLink key={index} {...product}/>   //vezme každý prvek a vloží to na danou pozici
            ))           
        }
        <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
        </Link>
        </>
    )
}