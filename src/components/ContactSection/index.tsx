import { Button } from "../Button";
import { ContainerContactSection } from "./styles"


export function ContactSection() {
    return (
        <ContainerContactSection>
            <h1>
                Deseja fazer projetos comigo?
            </h1>
            
            <Button text="Contato" width="small" style="transparent" modal />
        </ContainerContactSection>
    )
}