import imgContact from "../../assets/Contato/img-contato.svg";
import { Form } from "../../components/Form";
import { ContainerContact, ContainerInfos } from "./styles"

export function Contact() {
    return (
        <ContainerContact>
            <ContainerInfos>
                <img src={imgContact} alt="img-contato" />

                <p>
                    Gostou de algum projeto, possui alguma dúvia ou gostria de uma colaboração? Sinta-se a vontade para me enviar uma mensagem ou me contatar pelas redes sociais nos Ícones na parte inferiror da página.
                </p>
            </ContainerInfos>

            <Form formContato />
        </ContainerContact>
    )
}