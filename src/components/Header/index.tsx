import { ContainerHeader, ContainerNav, ContainerSocialMedias } from "./styles";
import iconLinkedin from "../../assets/Links/linkedin.svg";
import iconGitgub from "../../assets/Links/github.svg";
import iconBack from "../../assets/Icons/arrow-back.svg";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Header() {

    const navigate = useNavigate();
    const path = window.location.pathname;

    function backPage() {
        navigate(-1)
    }

    return (
        <ContainerHeader>
            <ContainerSocialMedias>

                {
                    path !== "/home" &&
                    <img src={iconBack} alt="icon-back" onClick={backPage} />
                }

                <Link to="https://github.com/FWalterDias" target="_blank">
                    <img src={iconGitgub} alt="icon-github" />
                </Link>

                <Link to="https://www.linkedin.com/in/francisco-walter/" target="_blank">
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