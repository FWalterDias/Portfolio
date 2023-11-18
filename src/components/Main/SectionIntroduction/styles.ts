import styled, { keyframes } from "styled-components";

const floatImgTechnologies = keyframes`
    50%{
        transform: translateY(10%);
    }
`

export const ContainerIntroduction = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    img{
        width: min(55rem, 100%);
        margin: 2rem 0;

        animation: ${floatImgTechnologies} 5s ease-in-out infinite;
    }

    @media (min-width: 760px){
        flex-direction: row-reverse;
        gap: 3rem;
        margin-top: 5rem;
    }
`

export const ContainerTextIntroduction = styled.div`
    display: flex;
    align-items: center;
    gap: 1.7rem;

    width: 100%;

    h2{
        width: 60%;
        color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3rem;
        letter-spacing: -0.446px; 
    }

    @media (min-width: 760px){
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;

        width: 50%;
        
        h2{
            width: 100%;
            line-height: 5rem;
        }
    }

    @media (min-width: 1200px) {
        h2{
            font-size: 5rem;   
        }
    }
`