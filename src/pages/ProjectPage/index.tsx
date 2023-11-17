import { CardProject } from "../../components/CardProject";
import { ContainerProjectPage } from "./styles";
import { projects } from "../../database/dateProjects";
import { useEffect } from "react";
import { ContactSection } from "../../components/ContactSection";

export function ProjectPage() {

    const projectsInverse = [...projects];
    projectsInverse.sort((a, b) => b.id - a.id);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <ContainerProjectPage>
                {
                    projectsInverse
                        .map((project) => (
                            <CardProject
                                key={project.id}
                                id={project.id}
                                img={project.cover}
                                title={project.tittle}
                                description={project.description}
                            />
                        ))
                }
            </ContainerProjectPage>

            <ContactSection />
        </>
    )
}