import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../contexts/Modalcontext";
import { ButtonProps } from "../../types/types";
import { ContainerButton } from "./styles";
import { RefAboutContext } from "../../contexts/RefAbout";

export function Button({ text, style, width, img, navigateTo, link, modal, about, download }: ButtonProps) {

    const refAbout = useContext(RefAboutContext);

    const modalContext = useContext(ModalContext);

    const navigate = useNavigate();

    const buttonClasses: string = `${style} ${width}`;

    function handleNavigate() {
        if (navigateTo) return navigate(`${navigateTo}`);

        if (modal) return modalContext.setModalOpen(true);

        if (link) return window.open(link, "_blank");

        if (about) {
            if (refAbout && refAbout.current) {
                console.log(refAbout);

                refAbout.current.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        if (download) return downloadFile();
    }

    async function downloadFile() {

        try {
            const fileUrl = download;
            const response = await fetch(fileUrl!);
            if (!response.ok) {
                throw new Error('Erro ao baixar o arquivo');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Francisco_Walter.pdf');
            link.style.display = "none";
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        } catch (error) {
            console.error(error);
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