import styled from "styled-components";

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.4rem;
`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    img{
        width: min(32.5rem, 100%);
        max-width: 55rem;
    }

    p{
        color: ${({theme}) => theme.DARK.COLORS.WHITE};
        text-align: justify;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 4rem;
        letter-spacing: 1px; 
    }

`