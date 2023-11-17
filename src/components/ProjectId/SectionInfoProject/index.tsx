import { SectionInfoProjectProps } from "../../../types/types"
import { ContainerDetailProject } from "./styles"

export function SectionInfoProject({ detail }: SectionInfoProjectProps) {
    return (
        <ContainerDetailProject>

            <h2>
                Projeto
            </h2>

            <p>
                {detail}
            </p>

        </ContainerDetailProject>
    )
}