export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/products", {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
  });
  const data = await res.json();
  return createProductsPayload(res, data);
}

export const getProduct = async (id: string) => {
  const res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
  }) 
  const data = await res.json();
  return createProductPayload(res, data);
}

export const createProduct = async (formData: ProductType) => {
  const res = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  return createProductPayload(res, data);
}

export const updateProduct = async (id: string, formData: ProductType) => {
  const res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  return createProductPayload(res, data);
}

export const deleteProduct = async (id: string) => {
  const res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return createProductPayload(res, data);
}


const createProductPayload = (res: Response, data: any): ProductPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

const createProductsPayload = (res: Response, data: any): ProductsPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

export type ProductPayload = {
    msg?: string,
    data: ProductType,
    status: number,
}

export type ProductsPayload = {
    msg?: string,
    data: ProductType[],
    status: number,
}

export type ProductType = {
    _id: string,
    name: string,
    price: number,
    quantity: number,
    smallDescription: string,
    description: string,
}