import styled from "styled-components";

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    font-family: "Roboto Condensed";
    gap: 7rem;

    fieldset{
        border: none;

        strong{
            display: block;
            margin-top: 1rem;
        }
    }

    legend{
        width: 100%;

        text-align: center;

        color: ${({theme}) => theme.DARK.COLORS.DARK_BLUE};
        text-align: center;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 130%;

        &.form-contact{
            padding-bottom: 1.6rem;
            border-bottom: solid 1px ${({theme}) => theme.DARK.COLORS.GRAY};

            color: ${({theme}) => theme.DARK.COLORS.WHITE};
            text-align: center;

            font-family: "Roboto Condensed";
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 700;
            letter-spacing: .2rem;

            text-transform: uppercase;
        }
    }

    button{
        align-self: center;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    input, textarea{
        width: 100%;

        padding: 1rem 1.4rem;

        border-radius: .8rem;
        border: 1px solid #D0D5DD;

        background: #FFFFFF;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        font-family: "Roboto Condensed";
        font-size: 1.6rem;
    }

    &:first-of-type{
        margin-top: 3rem;
    }

    input{
        margin-bottom: 2rem;
    }

    label{
        margin-bottom: .6rem;
    }

    textarea{
        resize: none;
        height: 15rem;
    }
`