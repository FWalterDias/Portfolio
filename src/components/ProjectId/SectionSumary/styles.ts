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

export const ContainerSumary = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: 55rem;

    text-align: justify;

    padding-bottom: 3.7rem;
    border-bottom: solid 1px ${({ theme }) => theme.DARK.COLORS.GRAY};

    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.6rem;
    font-style: normal;

    animation: ${fadeInContainersProjectId} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    h2{
        margin-top: 5rem;

        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 4rem;
        font-weight: 700;
        line-height: 4.2rem;
        letter-spacing: 5px; 
    }

    p{
        margin-top: 2rem;

        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 3rem;
        opacity: 0.8; 
    }

    button{
        margin-top: 6rem;
    }

    @media (min-width: 1200px) {
        grid-area: sectionSumary;
        max-width: 35rem;
    }
`
export const SectionInfoProject = styled.div`
    margin-top: 2.5rem;

    span{
        font-weight: 700;
        line-height: 30px;
        color: ${({ theme }) => theme.DARK.COLORS.CYAN};
    }
`

export const Technologies = styled.div``

export const Area = styled.div`
    @media (min-width: 1200px){
        margin-top: 2rem;
    }
`