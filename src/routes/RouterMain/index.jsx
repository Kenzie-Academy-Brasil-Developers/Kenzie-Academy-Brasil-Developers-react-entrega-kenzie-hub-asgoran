import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../../pages/DashBoard";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { NotFoundPage } from "../../pages/NotFoundPage";


export const RouterMain = () => {


    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
