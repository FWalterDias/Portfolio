import styled, { keyframes } from "styled-components";

const fadeInImgProjectId = keyframes`
  0% {
        transform: scaleY(0.4);
  }
  100% {
    
        transform: scaleY(1);
  }
`

export const ContainerProjectId = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 5rem;

    img{
        width: 100%;
        max-width: 95rem;
        align-self: center;
        animation: ${fadeInImgProjectId} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-areas: 
        "img img img"
        "sectionSumary sectionInfo sectionInfo"
        "sectionSumary sectionPreview sectionPreview";
        column-gap: 5rem;

        img{
            grid-area: img;
            margin: 0 auto;
        }
    }
`