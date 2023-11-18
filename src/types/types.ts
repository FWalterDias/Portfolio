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
    style: "normal" | "transparent"
    width: "small" | "biggest"
    img?: string
    navigateTo?: string
    link?: string
    modal?:boolean
    about?: boolean
    download?: string
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

export type CoursesProps = {
    id: number,
    img: string,
    name: string,
    link: string
}

export type CardProjectProps = {
    id:number,
    img: string,
    title: string,
    description: string
}

export type ProjectsProps = {
    id: number;
    tittle: string;
    description: string;
    detail: string;
    cover: string;
    previws: string[];
    tecnologies: string[];
    areas: string[];
    link: string;
}

export type SectionSumaryProps = {
    title: string,
    description: string,
    tecnologies: string[],
    areas: string[]
    link: string
}

export type SectionInfoProjectProps = {
    detail: string
}

export type SectionPreviwsProps = {
    previews: string[],
}

export type FormProps = {
    name: string,
    email: string,
    mensage: string
}

export type FormComponentProps = {
    formContato: boolean
}

export type ButtonFormProps = {
    width: "small" | "biggest"
}

export type ErrorProps = {
    showError: boolean,
    setShowError: (value: boolean) => void
    errorMensage: string
    setErrorMensage: (value: string) => void
}

export type ErrorProviderProps = {
    children: ReactNode
}

export type ErrorMensageProps = {
    text: string
}

export type RefAboutProviderProps = {
    children: ReactNode;
};