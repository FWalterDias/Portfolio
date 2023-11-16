import { createContext, useState } from "react";
import { ModalProps, ModalProviderProps } from "../types/types";

const ModalContext = createContext<ModalProps>({
    modalOpen: false,
    setModalOpen: () => { }
});

export function ModalProvider({ children }: ModalProviderProps) {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const modalValues: ModalProps = {
        modalOpen,
        setModalOpen
    }

    return (
        <ModalContext.Provider value={modalValues}>
            {children}
        </ModalContext.Provider>
    )
}