import styled from 'styled-components'

interface Image {
    image: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #EAEAEA;
    border-radius: 10px;

`

export const ImageBlock = styled.div<Image>`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    height: 153px;
`

export const Content = styled.div`
    padding: 16px;
    color: var(--text);

    h1 {
        font-size: 1.25rem;
        margin-bottom: 16px;
    }

    img {
        margin-right: 8px;
    }

    p {
        font-size: 1rem;
        line-height: 25px;
        margin-bottom: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`