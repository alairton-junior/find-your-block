import styled from 'styled-components';

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 32px;

    @media (max-width: 1024px) {
        & {
            grid-template-columns: repeat(2, 3fr);
        }
    }

    @media (max-width: 688px) {
        & {
            grid-template-columns: repeat(1, 3fr);
        }
    }
`