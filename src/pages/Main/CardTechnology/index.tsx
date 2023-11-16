import { CardTechnologyProps } from "../../../types/types.js"
import { ContainerCardTecnology } from "./styles.js"

export function CardTechnology({ srcIcone, textTecnology }: CardTechnologyProps) {
    return (
        <ContainerCardTecnology>
            <img src={srcIcone} alt="Icone tecnologia" />
            <strong>
                {textTecnology}
            </strong>
        </ContainerCardTecnology>
    )
}