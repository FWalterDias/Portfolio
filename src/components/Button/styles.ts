import styled from "styled-components";

export const ContainerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    height: 5rem;

    background-color: ${({ theme }) => theme.DARK.COLORS.WHITE};

    border-radius: .5rem;

    color: ${({ theme }) => theme.DARK.COLORS.DARK_DARK_BLUE};
    text-align: center;
    font-family: "Roboto mono";
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: .2rem;
    text-transform: uppercase; 
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, .5);


    img{
        width: 2.5rem;
    }

    &.small{
        width: 14rem;
    }

    &.biggest{
        width: 20rem;
    }

    &.transparent{
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.DARK.COLORS.WHITE}; 
        background: rgba(255, 255, 255, 0.00);

        &:hover{
            border: none;
            background-color: ${({ theme }) => theme.DARK.COLORS.CYAN};
        }
    }
`