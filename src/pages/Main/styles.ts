import styled, { keyframes } from "styled-components";

const fadeInMain = keyframes`
    from{
        scale: 0.95;
        opacity: .2;
    }
`

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    animation: ${fadeInMain} .5s ease-in-out both;
`
export const SectionFormationAndCourse = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    margin-top: 7rem;

    transition: all .5s ease-in-out;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
        gap: 10rem;
    }
`
