import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --gray: #F8F8FF;
        --text: #121214;
        --purple: #6246EA;
        --red: #E45858;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 16px;       
    }
    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
    }
    .leaflet-popup-content-wrapper {
        background: none;
        box-shadow: none;
    }

    .leaflet-popup-close-button span {
        font-size: 1.5rem;
        margin-right: 10px;
        margin-top: 10px;
    }

    .leaflet-popup-tip {
        
       visibility: hidden;
    }

    .popup {
        border: 1px solid #EAEAEA;
        border-radius: 10px;
        margin-bottom: 50px;
        background: white;
        border: 1px solid #EAEAEA;
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
    }
`