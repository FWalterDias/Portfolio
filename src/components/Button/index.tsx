import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../../types/types"
import { ContainerButton } from "./styles"

export function Button({ text, type, width, img, navigateTo }: ButtonProps) {

    const navigate = useNavigate();

    const buttonClasses: string = `${type} ${width}`;

    function handleNavigate(){
        if(navigateTo)  return navigate(`${navigateTo}`);
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