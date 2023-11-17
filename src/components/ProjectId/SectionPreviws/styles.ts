import styled  from "styled-components";

export const ContainerPreviews = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 10rem;

    h2{
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-family: "Roboto Mono", sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 4.2rem;
        letter-spacing: -0.286px; 

        margin-bottom: 3.5rem;
    }

    img{
        min-width: min(32rem, 100%);
        max-width: 70%;
        align-self: center;

        &:first-of-type{
            margin-bottom: 5rem;
        }
    }
`