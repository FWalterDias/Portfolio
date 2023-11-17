import { useParams } from "react-router-dom";
import { projects } from "../../database/dateProjects";
import { ContainerProjectId } from "./styles";
import { SectionSumary } from "../../components/ProjectId/SectionSumary";
import { SectionInfoProject } from "../../components/ProjectId/SectionInfoProject";
import { SectionPreviws } from "../../components/ProjectId/SectionPreviws";
import { useEffect } from "react";

export function ProjectId() {

    const { id } = useParams();

    const currentProject = projects.find((project) => project.id === Number(id));

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, []);

    return (
        <ContainerProjectId>
            <img src={currentProject!.cover} alt="project-cover" />

            <SectionSumary 
            title={currentProject!.tittle} 
            description={currentProject!.description}
            tecnologies={currentProject!.tecnologies} 
            areas={currentProject!.areas} />

            <SectionInfoProject
            detail={currentProject!.detail} />

            <SectionPreviws
            previews={currentProject!.previws}
             />
        </ContainerProjectId>
    )
}