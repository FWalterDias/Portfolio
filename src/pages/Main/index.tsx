
import { SectionCourses } from "../../components/Main/SectionCourses";
import { SectionFormations } from "../../components/Main/SectionFormations";
import { SectionHardSkills } from "../../components/Main/SectionHardSkills/indext";
import { SectionIntroduction } from "../../components/Main/SectionIntroduction";
import { ContainerMain } from "./styles";

export function Main() {
    return (
        <ContainerMain>
            <SectionIntroduction />
            <SectionHardSkills />
            <SectionFormations />
            <SectionCourses />
        </ContainerMain>
    )
}