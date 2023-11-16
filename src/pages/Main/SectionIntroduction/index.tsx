import { ContainerIntroduction, ContainerTextIntroduction } from "./styles";
import imgIntroduction from "../../../assets/Home/Tecnologias-apresentacao.svg";
import { Button } from "../../../components/Button";

export function SectionIntroduction() {
    return (
        <ContainerIntroduction>
            <img src={imgIntroduction} alt="img-technologies-introduction" />

            <ContainerTextIntroduction>
                <h2>
                    Olá, me chamo Francisco Walter,e sou desenvolvedor Full-Stack Junior
                </h2>

                <Button text="Sobre mim" width="small" type="introduction" />
            </ContainerTextIntroduction>
        </ContainerIntroduction>
    )
}