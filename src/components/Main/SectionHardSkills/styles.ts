import styled from "styled-components";

export const ContainerHardSkills = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 100%;

    margin-top: 6rem;
`

export const SectionTittle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    h1{
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-size: 3.2rem; 
        font-style: italic;
        font-weight: 500;
        line-height: 5rem;
        letter-spacing: -0.446px;
        text-transform: uppercase;  
    }

    img{
        width: 3rem;
        height: 3rem;
    }

    @media (min-width: 760px){
        h1{
            font-size: 4rem; 
        }
    }
`

export const ContainerCardAllTechnologies = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    justify-items: center;

    width: 100%;
`
