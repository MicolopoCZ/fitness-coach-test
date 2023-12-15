

export const getUsers = async () => {
    const res = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return createUsersPayload(res, data);
};

export const getUser = async (id: string) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return createUserPayload(res, data);
}

export const createUser = async (formData: UserType) => {
    const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createUserPayload(res, data);
}

export const updateUser = async (id: string, formData: UserType) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createUserPayload(res, data);
}

export const deleteUser = async (id: string) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data = await res.json();
    return createUserPayload(res, data);    
}

const createUserPayload =  (res: Response, data: any): UserPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

const createUsersPayload =  (res: Response, data: any): UsersPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

export type UserPayload = {
    msg?: string,
    data: UserType,
    status: number,
}

export type UsersPayload = {
    msg?: string,
    data: UserType[],
    status: number,
}

export type UserType = {
    _id: string,
    username: string,
    phone: number,
    password: string,
}