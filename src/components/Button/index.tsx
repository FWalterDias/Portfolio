import { ButtonProps } from "../../types/types"
import { ContainerButton } from "./styles"

export function Button({ text, type, width, img }: ButtonProps) {

    const buttonClasses: string = `${type} ${width}`;

    return (
        <ContainerButton className={buttonClasses}>
            <p>{text}</p>
            {img && <img src={img} alt="img-button" />}
        </ContainerButton>
    )
}