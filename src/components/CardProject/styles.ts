import styled, { keyframes } from "styled-components";

const appearLeft = keyframes`
    from{
        transform: translateX(-50%);
        opacity: .1;
    }
`

const appearRight = keyframes`
    from{
        transform: translateX(50%);
        opacity: .1;
    }
`

export const ContainerCardProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    animation: ${appearLeft} .3s ease-in-out;


    img{
        width: min(55rem, 100%);
        object-fit: contain;
    }

    @media (min-width: 760px) {
        flex-direction: row;
        justify-content: space-between;

        img{
            width: 50%;
        }

        &.even{
            flex-direction: row-reverse;
            animation: ${appearRight} .3s ease-in-out;
        }
    }

    @media (min-width: 1200px) {
        margin-top: 5rem;
    }
`
export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    max-width: 40rem;

    padding: 3.7rem 0 6rem;

    border-top: 1px solid rgba(151, 151, 151, 0.50);
    border-bottom: 1px solid rgba(151, 151, 151, 0.50);

    h3{
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 4.2rem;
        letter-spacing: .5rem; 
    }

    p{
        padding-right: 1rem;

        color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 3rem; 
        opacity: .8;
    }

    @media (min-width: 760px) {
        width: 50%;

        h3{
            font-size: 4rem;
        }
    }
`