

export const getBoots = async () => {
    const res = await fetch("http://localhost:3000/boots", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return createBootsPayload(res, data);
};

export const getBoot = async (id: string) => {
    const res = await fetch(`http://localhost:3000/boots/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return createBootPayload(res, data);
}

export const createBoot = async (formData: BootType) => {
    const res = await fetch("http://localhost:3000/boots", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createBootPayload(res, data);
}

export const updateBoot = async (id: string, formData: BootType) => {
    const res = await fetch(`http://localhost:3000/boots/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createBootPayload(res, data);
}

export const deleteBoot = async (id: string) => {
    const res = await fetch(`http://localhost:3000/boots/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data = await res.json();
    return createBootPayload(res, data);    
}

const createBootPayload =  (res: Response, data: any): BootPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

const createBootsPayload =  (res: Response, data: any): BootsPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

export type BootPayload = {
    msg?: string,
    data: BootType,
    status: number,
}

export type BootsPayload = {
    msg?: string,
    data: BootType[],
    status: number,
}

export type BootType = {
    _id: string,
    bootsName: string,
    color: string,
    size: number,
    style: string,
    bootsDescription: string,
    brand: string,
}