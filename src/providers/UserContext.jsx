import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services"

const UserContext = createContext({});

const UserProvider = ({ children }) => {

    const userLocal = localStorage.getItem("@USER");
    const [user, setUser] = useState(userLocal ? userLocal : "");

    const tokenLocal = localStorage.getItem("@TOKEN");
    const [token, setToken] = useState(tokenLocal ? tokenLocal : "");

    const userIdLocal = localStorage.getItem("@USERID");
    const [userId, setUserId] = useState(userIdLocal ? userIdLocal : 0);

    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api.get(`/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })

                setUser(data);
            } catch (error) {
                console.log(error)
            }
        }
        if (token && userId) {
            getUser();
        }
    })

    const userLogin = async (payload) => {
        try {
            const { data } = await api.post("/sessions", payload);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            localStorage.setItem("@USER", data.user);

            setToken(data.accessToken);
            setUserId(data.user.id);

            setUser(data.user);
            navigate("/dashboard");

        } catch (error) {
            console.log(error);
            // if (error.response.data === "Cannot find user") {
            //     toast.error("Credenciais invalidas");
            // }
        }
    }

    const userRegister = async (payload) => {
        try {
            await api.post("/users", payload);

            navigate("/");
            toast.success("Usuário cadastrado com sucesso!");
        } catch (error) {
            console.log(error);
        }
    };

    const userLogout = () => {
        setUser(null);
        navigate("/");

        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");

        setToken("");
        setUserId(0);

        toast.warn("Deslogando...");
    };

    return <UserContext.Provider value={{ token, user, userLogout, userLogin, userRegister }}>{children}</UserContext.Provider>
};

export { UserContext, UserProvider };