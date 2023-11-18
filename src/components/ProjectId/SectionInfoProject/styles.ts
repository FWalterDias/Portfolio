import styled, { keyframes } from "styled-components";

const fadeInContainersProjectId = keyframes`
    0% {
        transform: scaleX(0.4);
        transform-origin: 0% 0%;
    }
    100%{
        transform: scaleX(1);
        transform-origin: 0% 0%;
    }
`

export const ContainerDetailProject = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    width: 100%;

    margin-top: 5rem;

    animation: ${fadeInContainersProjectId} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    h2{
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 4.2rem;
        letter-spacing: -0.286px; 
    }

    p{
        text-align: justify;
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 3rem;
        opacity: 0.8;
    }

    @media (min-width: 1200px) {
        grid-area: sectionInfo;
        padding-right: 2rem;
    }
`