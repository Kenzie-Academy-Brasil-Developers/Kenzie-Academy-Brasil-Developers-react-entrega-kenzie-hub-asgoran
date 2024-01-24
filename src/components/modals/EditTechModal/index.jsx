import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { api } from "../../../services";
import { InputCreate } from "../../forms/Inputs/InputCreate";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { toast } from "react-toastify";

export const EditTech = ({ closeModal, id, title }) => {

    const { token } = useContext(UserContext);

    const { register, handleSubmit } = useForm()

    const [techList, setTechList] = useState([]);


    function recarregarAPagina() {
        window.location.reload();
    }

    const onSubmit = (payLoad) => {
        updateTech(payLoad);
    };
    const updateTech = async (payload) => {
        try {
            const newTech = { ...payload };


            const { data } = await api.put(`/users/techs/${id}`, payload, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const newTechs = techList.map((tech) =>
                tech.id === newTech.id ? data : tech
            );
            console.log(newTechs)

            setTechList(newTech);
            toast.success("Tech editada com sucesso!");
            recarregarAPagina()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div role="dialog" className="modalContainer" >
                <button onClick={closeModal}><IoMdClose /></button>
                <div>
                    <h1>Atualizar Tecnologia</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputCreate disabled value={title} label="Titulo" type="text" {...register("title")} />
                    <div>
                        <label for="Status">Status</label>
                        <select id="Status" defaultValue={""}{...register("status")}>
                            <option value="" disabled hidden>Escolha um status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button type="submit">Atualizar</button>
                </form>
            </div>
        </>
    )

}