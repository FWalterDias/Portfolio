import styled from "styled-components";

export const ContainerDetailProject = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    width: 100%;

    margin-top: 5rem;

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
`