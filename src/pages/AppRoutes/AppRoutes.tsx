//General
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";

//User
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import CreatedUser from "../CreatedUser/CreatedUser";
import User from "../User/User";
import UserList from "../UserList/UserList";
import DeletedUser from "../DeletedUser/DeletedUser";
import UpdatedUser from "../UpdatedUser/UpdatedUser";
import UpdateUserForm from "../UpdateUserForm/UpdateUserForm";

//Produkt
import Product from "../Product/Product";
import CreatedProduct from "../CreatedProduct/CreatedProduct";
import CreateProductForm from "../CreateProductForm/CreateProductForm";
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";
import ProductList from "../ProductList/ProductList";
import UpdatedProduct from "../UpdatedProduct/UpdatedProduct";
import DeletedProduct from "../DeletedProduct/DeletedProduct";

//Boty
import Boot from "../Boot/Boot";
import CreatedBoot from "../CreatedBoot/CreatedBoot";
import CreateBootForm from "../CreateBootForm/CreateBootForm";
import UpdateBootForm from "../UpdateBootForm/UpdateBootForm";
import BootList from "../BootList/BootList";
import UpdatedBoot from "../UpdatedBoot/UpdatedBoot";
import DeletedBoot from "../DeletedBoot/DeletedBoot";


export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="*" element={<NotFound />} />

                <Route path="/user/:id" element={<User />} />
                <Route path="/createuser" element={<CreateUserForm />}/>
                <Route path="/createduser/:id" element={<CreatedUser />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/deleteduser/:id" element={<DeletedUser />} />
                <Route path="/updateduser/:id" element={<UpdatedUser />} />
                <Route path="/updateuserform/:id" element={<UpdateUserForm />} />

                <Route path="/product/:id" element={<Product/>}/>¨
                <Route path="/createproduct" element={<CreateProductForm/>}/>
                <Route path="/createdproduct/:id" element={<CreatedProduct/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/deletedproduct/:id" element={<DeletedProduct/>}/>
                <Route path="/updatedproduct/:id" element={<UpdatedProduct/>}/>
                <Route path="/updateproductform/:id" element={<UpdateProductForm/>}/>

                <Route path="/boot/:id" element={<Boot/>}/>¨
                <Route path="/createboot" element={<CreateBootForm/>}/>
                <Route path="/createdboot/:id" element={<CreatedBoot/>}/>
                <Route path="/boots" element={<BootList/>}/>
                <Route path="/deletedboot/:id" element={<DeletedBoot/>}/>
                <Route path="/updatedboot/:id" element={<UpdatedBoot/>}/>
                <Route path="/updatebootform/:id" element={<UpdateBootForm/>}/>
            </Routes>
        </HashRouter>
    )
}