import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { api } from "../../../services";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { EditTech } from "../../modals/EditTechModal";

export const TechCard = ({ title, status, id }) => {

    const { token } = useContext(UserContext);

    const deleteTech = async () => {
        try {
            const { data } = await api.delete(`/users/techs/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true)
    };
    const closeModal = () => {
        setOpen(false)
    };


    return (
        <li>
            <div>
                <h2>{title}</h2>
                <p>{status}</p>
                <button onClick={openModal} >
                    <MdOutlineModeEditOutline />
                </button>
                {open ? <EditTech title={title} key={id} id={id} closeModal={closeModal} /> : null}

                <button onClick={deleteTech}>
                    <RiDeleteBin6Line />
                </button>
            </div>
        </li>
    )
}