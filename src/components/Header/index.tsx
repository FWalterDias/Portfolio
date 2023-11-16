import { ContainerHeader, ContainerNav, ContainerSocialMedias } from "./styles";
import iconLinkedin from "../../assets/Links/linkedin.svg";
import iconGitgub from "../../assets/Links/github.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <ContainerHeader>
            <ContainerSocialMedias>
                <Link to="https://github.com/FWalterDias">
                    <img src={iconGitgub} alt="icon-github" />
                </Link>

                <Link to="https://www.linkedin.com/in/francisco-walter/">
                    <img src={iconLinkedin} alt="icon-linkedin" />
                </Link>
            </ContainerSocialMedias>

            <ContainerNav>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? "active" : ""}
                            to="/home"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? "active" : ""}
                            to="/projects"
                        >
                            Projetos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? "active" : ""}
                            to="/contact"
                        >
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </ContainerNav>
        </ContainerHeader>
    )
}