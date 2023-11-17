import { ContainerFooter, ContainerLinkContatc } from "./styles";
import iconGithub from "../../assets/Links/github.svg"
import iconLinkedin from "../../assets/Links/linkedin.svg"
import iconWhatsApp from "../../assets/Links/whatsapp.svg"
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <ContainerFooter>
            <ContainerLinkContatc>
                <img src={iconGithub} alt="icon-github" />
                <Link to="https://github.com/FWalterDias" target="_blank">
                    Github
                </Link>
            </ContainerLinkContatc>
            <ContainerLinkContatc>
                <img src={iconLinkedin} alt="icon-linkedin" />
                <Link to="https://www.linkedin.com/in/francisco-walter/" target="_blank">
                    Linkedin
                </Link>
            </ContainerLinkContatc>
            <ContainerLinkContatc>
                <img src={iconWhatsApp} alt="icon-whatsapp"/>
                <Link to="https://wa.me/5588992820424" target="_blank">
                    (88) 99282-0424
                </Link>
            </ContainerLinkContatc>
        </ContainerFooter>
    )
}