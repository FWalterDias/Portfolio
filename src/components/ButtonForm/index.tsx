import { ButtonFormProps } from "../../types/types";
import { ContainerButton } from "./styles";

export function ButtonForm({ width }: ButtonFormProps) {
    return (
        <ContainerButton className={width}>
            Enviar mensagem
        </ContainerButton>
    )
}