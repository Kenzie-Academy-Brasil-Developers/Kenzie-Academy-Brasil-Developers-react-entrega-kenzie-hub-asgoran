import { RegisterForm } from "../../components/forms/RegisterForm";
import KenzieHub from "../../assets/KenzieHub.svg"
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <main className="registerPage__main">
            <div className="registerPage__header">
                <div className="img__register">
                    <img src={KenzieHub} />
                </div>
                <div className="back__btn">
                    <Link className="paragraph back" to="/">Voltar</Link>
                </div>
            </div>
            <section className="register__section">
                <div className="register__div">
                    <h1 className="title1">Crie sua conta</h1>
                    <p className="headline2">Rápido e grátis, vamos nessa</p>
                </div>
                <div className="registerForm__div">
                    <RegisterForm />
                </div>
            </section>
        </main>
    );
};