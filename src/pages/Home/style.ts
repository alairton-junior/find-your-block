import styled from "styled-components";

interface IButtonStyle {
    isActive: boolean;
}

export const ContainerFindBlock = styled.div`
    background-color: var(--gray);

    width: 100%;
    min-height: 532px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .ilustra_01 {
        position: absolute;
        top: 0;
        left: 0;

        @media (max-width: 1024px) {
            & {
                
                width: 30%;
            }
        }

        @media (max-width: 688px) {
            & {
                width: 50%;
            }
        }
    }

    .ilustra_02 {
        position: absolute;
        right: 0;
        bottom: 0;

        @media (max-width: 1024px) {
            & {
                width: 30%;
            }
        }

        @media (max-width: 688px) {
            & {
                width: 50%;
            }
        }
    }

    p {
        font-size: 1rem;
        letter-spacing: 2px;
        color: var(--red);

        margin-bottom: 18px;
        
        @media (max-width: 688px) {
            & {
                margin-top: 100px;
            }
        }
    }
    
    h1 {
        font-size: 3rem;
        text-align: center;
        color: var(--text);

        span {
            color: var(--purple);
        }
    }


`

export const FormContainer = styled.form`
    
    margin-top: 40px;
    padding: 40px;
    background-color: #fff;
    border: 1px solid #EAEAEA;
    border-radius: 10px;

    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        & {
            flex-direction: column;
        }
    }

    @media (max-width: 688px) {
        & {
            margin-bottom: 100px;
        }
    }
`

export const InputContainer = styled.div`
    
    position: relative;
    background-color: var(--gray);
    width: 300px;
    margin-right: 24px;
    padding-left: 50px;
    
    img {
        position: absolute;
        left: 14px;
        top: 8px;
    }

    select {
        cursor: pointer;
    }

    input, select {
        background-color: var(--gray);
        padding: 12px 8px 12px 0px;
        width: 95%;
        border-radius: 5px;
        font-weight: 400;
        color: rgba(124, 124, 138, 1);
        border: 0;
        outline: none;
        font-size: 1rem;
    }

    select option {
        border: 0;
        padding: 12px 8px 12px 0px;
    }

    @media (max-width: 1024px) {
        &{
            margin-bottom: 24px;
            margin-right: 0;
        }
    }
`

export const Button = styled.button`
    cursor: pointer!important;
    position: relative;
    padding: 12px 32px;
    background-color: var(--purple);
    font-weight: 700;
    font-size: 0.85rem;
    border: 0;
    color: #fff;
    border-radius: 5px;
    max-width: 300px;

    @media (max-width: 1024px) {
        &{
            margin-right: 0;
        }
    }
    
`

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;

    h2 {
        color: rgba(124, 124, 138, 1);
        font-weight: 400;
        margin-bottom: 10px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2rem;
        color: var(--text);
    }


    @media (max-width: 414px) {
        &{
            text-align: center;
            flex-direction: column;
        }
    }
`

export const ButtonsContainer = styled.div`
    border: 1px solid #EAEAEA;
    padding: 8px;


    @media (max-width: 414px) {
        &{
            margin-top: 16px;
        }
    }

`

export const ButtonSelect = styled(Button)<IButtonStyle>`
    background: ${(props) => props.isActive ? 'var(--purple)' : 'transparent' };
    color: ${(props) => props.isActive ? 'white' : 'var(--purple)' };

    @media (max-width: 768px) {
        & {
            width: 100%;
        }
    }

`
