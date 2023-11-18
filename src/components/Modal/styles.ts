import styled from "styled-components";

export const ModalFixed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100vw;
    min-height: 100vh;

    backdrop-filter: blur(5px);
`

export const ContainerModal = styled.div`
    position: fixed;
    z-index: 100;

    min-width: min(46rem, 80%);

    background-color: #FFFFFF;
    color: #000000;
    border-radius: 1rem;

    padding: 6rem 3rem 3rem;

    img{
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;

        &:hover{
            background-color: ${({theme}) => theme.DARK.COLORS.GRAY};
            border-radius: .5rem;
        }
    }
`