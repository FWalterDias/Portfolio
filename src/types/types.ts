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
    type: "normal" | "transparent"
    width: "small" | "biggest"
    img?: string
    navigateTo?: string
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
    name: string
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
}

export type SectionInfoProjectProps = {
    detail: string
}

export type SectionPreviwsProps = {
    previews: string[],
}