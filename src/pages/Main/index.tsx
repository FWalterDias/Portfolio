import { SectionHardSkills } from "./SectionHardSkills/indext";
import { SectionIntroduction } from "./SectionIntroduction";
import { ContainerMain } from "./styles";

export function Main() {
    return (
        <ContainerMain>
            <SectionIntroduction />
            <SectionHardSkills />
        </ContainerMain>
    )
}