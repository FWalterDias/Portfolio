import { useContext } from "react";
import perfilImg from "../../../assets/Home/perfil.png";
import { RefAboutContext } from "../../../contexts/RefAbout";
import { Button } from "../../Button";
import { ContainerAboutMe, ContainerTextxsAboutMe } from "./styles";

export function SectionAboutMe() {
    
    const refAbout = useContext(RefAboutContext)

    return (
        <ContainerAboutMe ref={refAbout}>
            <img src={perfilImg} alt="img-perfil" />

            <ContainerTextxsAboutMe>
                <h2>
                    Quem sou
                </h2>

                <h1>
                    Francisco walter
                </h1>

                <h3>
                    Full-stack Developer
                </h3>

                <p>
                    Olá, sou Francisco Walter, Desenvolvedor Full-stack formado pela Cubos Academy e RocketSeat. Possuo sólidos conhecimentos em HTML, CSS, JavaScript, React, Styled-Components, Node, Express, PostgreSQL, MySQL, e API's REST. Ao longo da minha carreira, desenvolvi diversos projetos que envolvem desde a criação de Landing Pages a páginas dinâmicas com Back-End, incluindo integração com APIs externas.  Atualmente, estou dedicando tempo para aprofundar meus conhecimentos em React.js e Node.js, explorando frameworks e bibliotecas para melhorar minhas habilidades.
                </p>

                <Button
                    text="Ir para projetos"
                    style="normal"
                    width="biggest"
                    navigateTo="/projects" />
            </ContainerTextxsAboutMe>
        </ContainerAboutMe>
    )
}