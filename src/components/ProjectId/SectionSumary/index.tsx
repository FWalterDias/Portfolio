import { SectionSumaryProps } from "../../../types/types"
import { Button } from "../../Button"
import { ContainerSumary, SectionInfoProject, Technologies, Area } from "./styles"

export function SectionSumary({ title, description, tecnologies, areas }: SectionSumaryProps) {
    return (
        <ContainerSumary>
            <h2>
                {title}
            </h2>

            <p>
                {description}
            </p>

            <SectionInfoProject>
                <Technologies>
                    {
                        tecnologies.map((tecnologie, index) => (
                            <span key={index}>
                                {tecnologie}
                                {index === tecnologies.length - 1 ? null : " / "}
                            </span>
                        ))
                    }
                </Technologies>

                <Area>
                {
                        areas.map((area, index) => (
                            <span key={index}>
                                {area}
                                {index === areas.length - 1 ? null : " / "}
                            </span>
                        ))
                    }
                </Area>
            </SectionInfoProject>

            <Button
                text="Ir para projeto"
                type="normal"
                width="biggest"
            />
        </ContainerSumary>
    )
}