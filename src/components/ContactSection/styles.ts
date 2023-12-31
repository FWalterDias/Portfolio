import styled from "styled-components";

export const ContainerContactSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    width: 100%;

    margin-top: 8rem;

    h1{
        width: 60%;

        color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
        text-align: center;
        font-family: "Roboto Mono", sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 4.2rem; 
        letter-spacing: -0.357px; 
    }

    @media (min-width: 760px){
        justify-content: space-between;

        h1{
            font-size: 4rem;
            text-align: left;
        }
    }

    @media (min-width: 1200px){
        h1{
            width: 40%;
        }
    }
`