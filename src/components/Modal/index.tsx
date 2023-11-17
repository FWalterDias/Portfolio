import close from "../../assets/Modal/close.png";
import { useContext } from "react";
import { ModalContext } from "../../contexts/Modalcontext";
import { ContainerModal, ModalFixed } from "./styles";
import { Form } from "../Form";

export default function Modal() {

    const modal = useContext(ModalContext);

    return (
        <>
            {modal.modalOpen &&
                <ModalFixed>
                    <ContainerModal>
                        <img
                            src={close}
                            alt="img-close-modal"
                            className="close-modal"
                            onClick={() => modal.setModalOpen(false)} />

                    <Form formContato={false} />
                    </ContainerModal>
                </ModalFixed >
            }
        </>
    )
}