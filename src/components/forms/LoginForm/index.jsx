import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./loginForm.schema";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { InputStandard } from "../Inputs/InputStandard";
import { InputPassword } from "../Inputs/InputPassword";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {

    const { userLogin } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });
    const onSubmit = (payLoad) => {
        userLogin(payLoad);
    };

    return (
        <form className="login__form " onSubmit={handleSubmit(onSubmit)}>
            <div className="emailLogin__input headline">
                <InputStandard className="email__input" label="Email" type="email" error={errors.email}{...register("email")} />
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
