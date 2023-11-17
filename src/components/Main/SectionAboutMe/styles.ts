import styled from "styled-components";

export const ContainerAboutMe = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    margin-top: 3.5rem;

    img{
        width: min(30rem, 100%);
        background: rgba(8,8,11,0.3);
        object-fit: cover;
    }
`

export const ContainerTextxsAboutMe = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1.6rem 0 4.4rem;

    margin-top: 5rem;

    border-top: solid 1px ${({ theme }) => theme.DARK.COLORS.GRAY};
    border-bottom: solid 1px ${({ theme }) => theme.DARK.COLORS.GRAY};

    h2{
        color: ${({ theme }) => theme.DARK.COLORS.CYAN};
        font-family: "Roboto Mono", sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 4.2rem;
        letter-spacing: -0.357px;
        text-transform: uppercase; 
    }

    h1{
        margin-top: 1rem;

        color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: .3rem;
        text-transform: capitalize; 
    }

    h3{
        color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: .2rem;
        text-transform: capitalize;
    }
    
    h1, h2, h3{
        text-align:left;
    }

    p{
        margin-top: 2.4rem;
        
        text-align: justify;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 3rem;
        opacity: 0.8; 
    }

    button{
        margin-top: 2.5rem;
        align-self: center;
    }

`