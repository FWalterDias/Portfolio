import { ButtonProps } from "../../types/types"
import { ContainerButton } from "./styles"

export function Button({ text, type, width }: ButtonProps) {

    const buttonClasses:string = `${type} ${width}`

    return (
        <ContainerButton className={buttonClasses}>
            {text}
        </ContainerButton>
    )
}