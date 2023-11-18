import styled, { keyframes }  from "styled-components";

const fadeInContainersProjectId = keyframes`
    0% {
        transform: scaleY(0.4);
        transform-origin: 100% 0%;
    }
    100%{
        transform: scaleY(1);
        transform-origin: 100% 0%;
    }
`

export const ContainerPreviews = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 10rem;

    animation: ${fadeInContainersProjectId} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

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

    @media (min-width: 1200px) {
        grid-area: sectionPreview;

        img{

        }
    }
`