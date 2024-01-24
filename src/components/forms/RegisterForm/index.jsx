import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterFormSchema } from "./registerForm.schema";
import { InputPassword } from "../Inputs/InputPassword";
import { InputStandard } from "../Inputs/InputStandard";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: zodResolver(RegisterFormSchema),
    });

    const { userRegister } = useContext(UserContext);

    const onSubmit = (payLoad) => {
        userRegister(payLoad);
    };

    return (
        <form className="registerForm headline2" onSubmit={handleSubmit(onSubmit)}>
            <InputStandard label="Nome" type="text" error={errors.name} {...register("name")} />
            <InputStandard label="Email" type="email" error={errors.email}{...register("email")} />
            <InputPassword label="Senha" error={errors.password}{...register("password")} />
            <InputPassword label="Confirmar Senha" error={errors.confirmPassword}{...register("confirmPassword")} />
            <InputStandard label="Bio" type="text" error={errors.bio}{...register("bio")} />
            <InputStandard label="Contato" type="tel" error={errors.contact} {...register("contact")} />

            <div>
                <label for="Selecionar módulo">Selecionar módulo</label>
                <select id="Selecionar módulo" defaultValue={""} {...register("course_module")}>
                    <option value="" disabled hidden>
                        Selecione um Módulo
                    </option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                {errors ? <p>{errors.course_module?.message}</p> : null}
            </div>
            <button className={isValid ? "btn login signupBtn" : "btnnegative signupBtn"} type="submit">Cadastrar</button>
        </form>
    );
}