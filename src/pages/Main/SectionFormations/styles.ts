import styled from "styled-components";

export const ContainerFormations = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 1rem 1rem 3rem;

    margin-top: 5rem;

    background-color: ${({ theme }) => theme.DARK.COLORS.DARK_BLUE};
    box-shadow: .5rem .5rem 1rem 0 #000; 
    border-radius: .5rem;

    
`

export const SectionTittleFormations = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem; 

    color: ${({ theme }) => theme.DARK.COLORS.WHITE};
    text-align: center;
    font-size: 3%.2rem;
    font-weight: 700;
    line-height: 5rem;
    letter-spacing: -0.446px;
    text-transform: uppercase;
`

export const SectionNameFormation = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem; 

    padding: 2.5rem 1rem;

    color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    line-height: 2.5rem;
    letter-spacing: -0.8px; 

    img{
        width: 2.5rem;
        height: 2.5rem;
    }

    &:nth-child(2){
        border-bottom: solid 1px rgba(151, 151, 151, 0.50);
    }
`