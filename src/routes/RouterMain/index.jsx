import { Route, Routes, useNavigate } from "react-router-dom";
import { DashBoard } from "../../pages/DashBoard";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/register";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { useEffect, useState } from "react";


export const RouterMain = () => {


    const [authData, setAuthData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("authData", JSON.stringify(authData));
    }, [authData]);


    const userLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Routes>
            <Route path="/" element={<Login setAuthData={setAuthData} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard authData={authData} userLogout={userLogout} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
