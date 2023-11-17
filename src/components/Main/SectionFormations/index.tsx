import iconCubosAcademy from "../../../assets/Icons/cubos.png";
import iconCurriculo from "../../../assets/Icons/curriculo.svg";
import iconEstacio from "../../../assets/Icons/estacio.png";
import iconFormations from "../../../assets/Icons/graduation-cap-fill.svg";
import { Button } from "../../../components/Button";
import { ContainerFormations, SectionNameFormation, SectionTittleFormations } from "./styles";

export function SectionFormations() {
    return (
        <ContainerFormations>
            <SectionTittleFormations>
                <h1>Formações</h1>
                <img src={iconFormations} alt="icon-formations" />
            </SectionTittleFormations>

            <SectionNameFormation>
                <img src={ iconCubosAcademy } alt="icon-cubos-academy" />
                <p>
                    Cubos Academy - Desenvolvimento de Software
                    (Concluído / 2023)
                </p>
            </SectionNameFormation>

            <SectionNameFormation>
                <img src={ iconEstacio } alt="icon-estacio" />
                <p>
                    Estácio - Análise e Desenvolvimento de Sistemas
                    (10/2022 - Trancado)
                </p>
            </SectionNameFormation>

            <Button
            text="Curriculo" 
            type="transparent" 
            width="small"
            img={iconCurriculo}  />
        </ContainerFormations>
    )
}