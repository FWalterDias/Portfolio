import styled from "styled-components";

export const ContainerSumary = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;

    text-align: justify;

    padding-bottom: 3.7rem;
    border-bottom: solid 1px ${({ theme }) => theme.DARK.COLORS.GRAY};

    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.6rem;
    font-style: normal;

    h2{
        margin-top: 5rem;

        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 4rem;
        font-weight: 700;
        line-height: 4.2rem;
        letter-spacing: 5px; 
    }

    p{
        margin-top: 2rem;

        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 3rem;
        opacity: 0.8; 
    }

    button{
        margin-top: 6rem;
    }
`
export const SectionInfoProject = styled.div`
    margin-top: 2.5rem;

    span{
        font-weight: 700;
        line-height: 30px;
        color: ${({ theme }) => theme.DARK.COLORS.CYAN};
    }
`

export const Technologies = styled.div``
export const Area = styled.div``