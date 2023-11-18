import styled from "styled-components";

export const ContainerCourses = styled.section`
    width: 100%;
    max-width: 50rem;

    padding: 1rem 1rem 3rem;

    margin-top: 5rem;

    background-color: ${({ theme }) => theme.DARK.COLORS.DARK_BLUE};
    box-shadow: .5rem .5rem 1rem 0 #000; 
    border-radius: .5rem;

    position: relative;

    @media(min-width: 760px){
        padding: 2rem 4rem;
        height: 40rem;
    }
`

export const SectionTittleCourses = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem; 

    color: ${({ theme }) => theme.DARK.COLORS.WHITE};
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 5rem;
    letter-spacing: -0.446px;
    text-transform: uppercase;
`

export const ContainerSlides = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    
    padding-top: 2rem;

    overflow: hidden;

    position: relative;
`

export const Slides = styled.div`
    display: flex;
    
    width: 300%;
    height: 100%;

    input{
        display: none;
    }

    #radio1:checked ~ div{
        .autoBtn1{
            background-color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        }
    }

    #radio1:checked ~ .first{
        margin-left: 0;
    }

    #radio2:checked ~ div{
        .autoBtn2{
            background-color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        }
    }

    #radio2:checked ~ .first{
        margin-left: -33%;
    }

    #radio3:checked ~ div{
        .autoBtn3{
            background-color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        }
    }

    #radio3:checked ~ .first{
        margin-left: -66%;
    }
`

export const Course = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 33.24%;
    height: 100%;
    transition: all .5s ease-in-out;

    img:first-child{
        width: 20rem;
        object-fit: contain;
    }

    p:nth-child(2){
        color: ${({ theme }) => theme.DARK.COLORS.LIGHT_WHITE};
        text-align: center;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        letter-spacing: -0.8px; 

        margin-top: 1rem;
    }

    button{
        margin: 3rem 0;
    }
`

export const SlidesAutoNavigate = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    gap: 4rem;

    width: 100%;
    bottom: 0;

    div{
        border: .2rem solid ${({ theme }) => theme.DARK.COLORS.WHITE};
        padding: .5rem;
        border-radius: 50%;
        cursor: pointer;

        transition: background-color .3s ease-in-out;
    }
`

export const LabelsInputsSlides = styled.div`
    position: absolute;

    width: 100%;
    bottom: 0rem;

    display: flex;
    gap: 4rem;
    justify-content: center;

    .manualBtn{
        border: .2rem solid ${({ theme }) => theme.DARK.COLORS.WHITE};
        padding: .5rem;
        border-radius: 50%;
        cursor: pointer;

        transition: background-color .3s ease-in-out;

        &:hover{
            background-color: ${({ theme }) => theme.DARK.COLORS.WHITE};
        }
    }
`

export const ArrowLeft = styled.div`
    position: absolute;

    width: 2.5rem;

    left: 1rem;
    top: 40%;

    cursor: pointer;
`
export const ArrowRight = styled.div`
    position: absolute;

    width: 2.5rem;

    right: 1rem;
    top: 40%;

    cursor: pointer;
`