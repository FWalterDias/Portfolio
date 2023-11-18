import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
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
