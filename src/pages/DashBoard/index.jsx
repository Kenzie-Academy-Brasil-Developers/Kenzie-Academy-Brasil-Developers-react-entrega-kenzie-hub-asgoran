import KenzieHub from "../../assets/KenzieHub.svg"

export const DashBoard = ({ authData, userLogout }) => {

    const user = authData.user

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
            <div className="warning__dashboard">
                <h2 className="title1">Que pena! Estamos em desenvolvimento :(</h2>
                <p className="title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </main>
    );
};