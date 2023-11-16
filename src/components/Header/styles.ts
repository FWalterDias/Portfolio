import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid rgba(250, 250, 250, 0.50);

    padding: 1rem 0; 
`

export const ContainerSocialMedias = styled.div`
    display: flex;
    gap: 1rem;

    
    a{
        img{
            width: 2rem;
            height: 2rem; 
            transition: scale .2s ease-in-out;

            &:hover{
                scale: 1.05;
            }
        }
    }
`

export const ContainerNav = styled.nav`
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: .2rem;
    text-transform: uppercase; 

    transition: all .2s ease-in-out;

    ul{
        display: flex;
        gap: 1rem;

        li{

            a{
                &:hover{
                    color: ${({theme}) => theme.DARK.COLORS.CYAN};
                    opacity: .9;
                }

                &.active{
                    color: ${({ theme }) => theme.DARK.COLORS.CYAN};
                    font-weight: 500;
                }   
            }
        }
    }

    

`