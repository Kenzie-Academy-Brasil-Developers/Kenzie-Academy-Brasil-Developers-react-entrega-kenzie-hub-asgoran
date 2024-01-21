import { useForm } from "react-hook-form";
import { Input } from "../input";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./loginForm.schema";
import { InputPassword } from "../inputPassword";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const LoginForm = ({ setAuthData }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });
    const onSubmit = (payLoad) => {
        userLogin(payLoad);
    };

    const navigate = useNavigate();

    const userLogin = async (payLoad) => {
        try {
            const { data } = await api.post("/sessions", payLoad);
            setAuthData(data);
            navigate("/dashboard");
            console.log(data);
            toast.success("Bem vindo!")
        } catch (error) {
            console.log(error);
            if (error.response.data.message === "Incorrect email / password combination") {
                toast.error("Credenciais invalidas")
            }
        }
    };
    return (
        <form className="login__form " onSubmit={handleSubmit(onSubmit)}>
            <div className="emailLogin__input headline">
                <Input className="email__input" label="Email" type="email" error={errors.email}{...register("email")} />
            </div>
            <div className="passwordLogin__input headline">
                <InputPassword className="password__input " label="Senha" error={errors.password}{...register("password")} />
            </div>
            <div>
                <button className="btn login" type="submit">Entrar</button>
            </div>
            <div>
                <p className="headline2">Ainda não possui uma conta?</p>
                <Link className="btn disabled" to="/register">Cadastre-se</Link>
            </div>

        </form>
    );
}
