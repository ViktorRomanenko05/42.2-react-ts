import styled from "@emotion/styled";
import {css, keyframes} from "@emotion/react";


const animation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;

const flexContainerStyles = css`
    display: flex;
    align-items: center;
`

export const Lesson10container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    gap: 30px;
    flex: 1;
`

export const ButtonsBlock = styled.div`
    ${flexContainerStyles};
    justify-content: center;
    gap: 30px;
    width: 500px;
`

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px black solid;
    border-radius: 8px;
    width: 500px;
    height: 700px;
    overflow-y: auto;
`

export const DeleteButtonWrapper = styled.div`
    width: 100px;
`

export const Spinner = styled.div`
    width: 30px;
    height: 30px;
    border: 6px solid white;
    border-top: 6px solid blue;
    border-radius: 50%;
    animation: ${animation} 1.5s linear infinite;
    margin: 0 auto;
`;

export const FactItem = styled.div`
    ${flexContainerStyles};
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    position: relative;
`;