import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background: ${({ theme }) => theme.DARK.COLORS.BACKGROUND_PAGE} no-repeat;
        min-height: 100vh;
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        font-size: 1.6rem;
        font-family: "Roboto Mono", sans-serif;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.DARK.COLORS.WHITE};

        transition: all .3s ease-in-out;

        &:hover{
            color: ${({theme}) => theme.DARK.COLORS.CYAN};
            opacity: .8;
        }
    }

    button{
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover{
            color: ${({theme}) => theme.DARK.COLORS.WHITE};
            background-color: ${({theme}) => theme.DARK.COLORS.CYAN};
            font-weight: 700;
        }

        &:active{
            opacity: .5;
        }
    }

    button{
        border: none;
    }

    li{
        list-style: none;
    }

    
`