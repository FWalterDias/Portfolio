import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../../types/types"
import { ContainerButton } from "./styles"
import { ModalContext } from "../../contexts/Modalcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Button({ text, style, width, img, navigateTo, link, modal }: ButtonProps) {

    const modalContext = useContext(ModalContext)

    const navigate = useNavigate();

    const buttonClasses: string = `${style} ${width}`;

    function handleNavigate(){
        if(navigateTo)  return navigate(`${navigateTo}`);

        if(modal) return modalContext.setModalOpen(true);

        if(link) return <Link to={link} />
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