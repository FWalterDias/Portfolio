import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    width: 100%;

    margin-top: 8rem;

    @media (min-width: 760px) {
        flex-direction: row;
        justify-content: space-between;

        &.no-margin{
            margin: 0;
        }
    }
`

export const ContainerLinkContatc = styled.div`
    display: flex;
    align-items: center;
    gap: 1.3rem;

    a{  
        color: ${({theme}) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Condensed", sans-serif;
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: .2; 
    }
`