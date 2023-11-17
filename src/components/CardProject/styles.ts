import styled from "styled-components";

export const ContainerCardProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    img{
        min-width: min(32.5rem, 100%);
        max-width: 55rem;
    }
`
export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

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
`