import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    width: 100%;

    margin-top: 8rem;
`

export const ContainerLinkContatc = styled.div`
    display: flex;
    gap: 1.3rem;

    width: 100%;

    a{  
        color: ${({theme}) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Condensed", sans-serif;
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: .2; 
    }
`