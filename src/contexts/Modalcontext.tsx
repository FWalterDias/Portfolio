import { createContext, useState } from "react";
import { ModalProps, ModalProviderProps } from "../types/types";

export const ModalContext = createContext<ModalProps>({
    modalOpen: true,
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