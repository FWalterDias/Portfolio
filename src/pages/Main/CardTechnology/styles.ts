import styled from "styled-components";

export const ContainerCardTecnology = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    width: 10rem;
    height: 4rem;

    padding-left: .9rem;

    border-radius: 1rem;
    background: ${({theme}) => theme.DARK.COLORS.WHITE}; 

    transition: box-shadow .2s ease-in-out;

    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 10px 0px #2DFFC4; 
    }

    img{
        width: 2.5rem;
        height: 2.5rem;
    }

    strong{
        color: ${({theme}) => theme.DARK.COLORS.DARK_BLUE};
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.446px;
        text-transform: capitalize; 
    }
`