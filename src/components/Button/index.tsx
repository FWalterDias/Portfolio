import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../contexts/Modalcontext";
import { ButtonProps } from "../../types/types";
import { ContainerButton } from "./styles";
import { RefAboutContext } from "../../contexts/RefAbout";

export function Button({ text, style, width, img, navigateTo, link, modal, about }: ButtonProps) {

    const refAbout = useContext(RefAboutContext);

    const modalContext = useContext(ModalContext);

    const navigate = useNavigate();

    const buttonClasses: string = `${style} ${width}`;

    function handleNavigate(){
        if(navigateTo)  return navigate(`${navigateTo}`);

        if(modal) return modalContext.setModalOpen(true);

        if(link) return window.open(link, "_blank");

        if(about) {
            if (refAbout && refAbout.current) {
                console.log(refAbout);
                
                refAbout.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }


    return (
        <ContainerButton 
        className={buttonClasses} 
        onClick={handleNavigate}>
            <span>{text}</span>
            {img && <img src={img} alt="img-button" />}
        </ContainerButton>
    )
}