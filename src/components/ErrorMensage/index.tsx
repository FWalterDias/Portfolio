import { ErrorMensageProps } from "../../types/types";
import { ContainerError } from "./styles";

export function ErrorMensage({ text }: ErrorMensageProps) {
    return (
        <ContainerError>
            {text}
        </ContainerError>
    )
}