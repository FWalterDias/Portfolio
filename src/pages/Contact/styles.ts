import styled, { keyframes } from "styled-components";

const fadeInContact = keyframes`
    from{
        scale: 0.95;
        opacity: .2;
    }
`

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.4rem;

    animation: ${fadeInContact} .5s ease-in-out;

    @media (min-width: 1200px) {
        flex-direction: row-reverse;
        justify-content: space-evenly;

        align-items: center;
        justify-content: center;
    }
`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 35rem;

    img{
        width: min(55rem, 100%);
    }

    p{
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        text-align: justify;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 4rem;
        letter-spacing: 1px; 
    }

    @media (min-width: 1200px) {
        flex-direction: column-reverse;
    }
`