import { ReactNode } from "react";

export type ModalProps = {
    modalOpen: boolean,
    setModalOpen: (value: boolean) => void;
}

export type ModalProviderProps = {
    children: ReactNode
}

export type ButtonProps = {
    text: string
    type: "normal" | "introduction"
    width: "small" | "biggest"
}

export type TechnologiesProps = {
    id: number,
    icon: string,
    technology: string
}

export type CardTechnologyProps = {
    srcIcone: string,
    textTecnology: string
}