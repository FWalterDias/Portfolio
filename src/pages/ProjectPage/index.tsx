import { CardProject } from "../../components/CardProject";
import { ContainerProjectPage } from "./styles";
import { projects } from "../../database/dateProjects";
import { useEffect } from "react";

export function ProjectPage(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, []);

    return(
        <ContainerProjectPage>
            {
                projects
                .sort((a, b) => b.id - a.id)
                .map((project) => (
                    <CardProject 
                        key={project.id}
                        id={project.id}
                        img={project.capa}
                        title={project.titulo}
                        description={project.descricao}
                    />
                ))
            }
        </ContainerProjectPage>
    )
}