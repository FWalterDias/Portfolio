import iconHardSkills from "../../../assets/Icons/code-fill.svg";
import { CardTechnology } from "../CardTechnology";
import { ContainerHardSkills, SectionTittle, ContainerCardAllTechnologies } from "./styles";
import { technologys } from "../../../database/technologiesIcons";

export function SectionHardSkills() {
    return (
        <ContainerHardSkills>
            <SectionTittle>
                <h1>Hard-Skills</h1>
                <img src={iconHardSkills} alt="icon-hard-skills" />
            </SectionTittle>

            <ContainerCardAllTechnologies>
                {
                    technologys.map((technology) => (
                        <CardTechnology
                            key={technology.id}
                            srcIcone={technology.icon}
                            textTecnology={technology.technology} />
                    ))
                }
            </ContainerCardAllTechnologies>
        </ContainerHardSkills>
    )
}