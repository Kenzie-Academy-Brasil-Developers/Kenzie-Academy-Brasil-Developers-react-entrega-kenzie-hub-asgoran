import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTechFormSchema } from "./CreateTech.schema";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { api } from "../../../services";
import { InputCreate } from "../../forms/Inputs/InputCreate";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const CreateTech = ({ closeModal }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CreateTechFormSchema),
    });

    const { token } = useContext(UserContext);


    const onSubmit = (payLoad) => {
        createUserTech(payLoad);
    };

    const createUserTech = async (payLoad) => {
        try {
            const { data } = await api.post("/users/techs", payLoad, {
                headers: { authorization: `Bearer ${token}` }
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div role="dialog" className="modalContainer" >
                <button onClick={closeModal}><IoMdClose /></button>
                <div>
                    <h1>Cadastrar Tecnologia</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputCreate label="Titulo" type="text" error={errors.title} {...register("title")} />
                    <div>
                        <label for="Status">Status</label>
                        <select id="Status" defaultValue={""}{...register("status")}>
                            <option value="" disabled hidden>Escolha um status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors ? <p>{errors.status?.message}</p> : null}
                    </div>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </>
    )

}