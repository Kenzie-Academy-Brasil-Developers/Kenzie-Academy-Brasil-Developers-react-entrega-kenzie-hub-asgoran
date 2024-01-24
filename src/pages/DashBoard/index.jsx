import { useContext } from "react";
import KenzieHub from "../../assets/KenzieHub.svg"
import { TechList } from "../../components/techs";
import { UserContext } from "../../providers/UserContext";

export const DashBoard = () => {

    const { user, userLogout } = useContext(UserContext);

    return (
        <main className="main__dashboard">
            <div className="header__dashboard">
                <img src={KenzieHub} />
                <button className="btn exit" onClick={userLogout}>Sair</button>
            </div>
            <div className="welcome__dashboard">
                <h1 className="title1">Olá, {user?.name}</h1>
                <p className="headline">{user?.course_module}</p>
            </div>
            <div>
                <TechList />
            </div>
        </main>
    );
};