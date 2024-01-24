import KenzieHub from "../../assets/KenzieHub.svg"
import { LoginForm } from "../../components/forms/LoginForm";

export const Login = ({ }) => {

    return (
        <main className="main__login">
            <div className="img__login">
                <img src={KenzieHub} />
            </div>
            <section className="login__section">
                <div className="login__div">
                    <h1 className="title2">Login</h1>
                    <LoginForm />
                </div>
            </section>
        </main>
    );
};