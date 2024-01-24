import { useContext, useState } from "react";
import { CreateTech } from "../../modals/CreateTechModal";
import { TechCard } from "../TechCard";
import { FaSquarePlus } from "react-icons/fa6";
import { UserContext } from "../../../providers/UserContext";

export const TechList = () => {

    const { user } = useContext(UserContext);


    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true)
    };
    const closeModal = () => {
        setOpen(false)
    };

    return (
        <>
            <div>
                <h3>Tecnologias</h3>
                <button onClick={openModal}><FaSquarePlus /></button>
            </div>
            {open ? <CreateTech closeModal={closeModal} /> : null}
            <div>
                <ul>
                    {
                        user.techs?.map(el => <TechCard key={el.id} id={el.id} title={el.title} status={el.status} />)
                    }
                </ul>
            </div>
        </>
    );
}