import { SectionPreviwsProps } from "../../../types/types"
import { ContainerPreviews } from "./styles"

export function SectionPreviws({ previews }: SectionPreviwsProps) {
    return (
        <ContainerPreviews>
            <h2>Previews Estáticos</h2>

            {
                previews.map((preview, index) => (
                    <img key={index} src={preview} alt={`img-preview-${index}`}/>
                ))
            }
        </ContainerPreviews>
    )
}