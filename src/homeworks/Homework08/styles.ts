import styled from "@emotion/styled";
import {css} from "@emotion/react";

const flexContainerStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const displayBasicStyles = css`
    ${flexContainerStyles};
    background-color: azure;
    border: 2px solid;
    border-radius: 4px;
    width: 200px;
    height: 100px;
    font-size: 32px;
    overflow: hidden;
`

export const Homework08Container = styled.div`
    ${flexContainerStyles};
    flex-direction: column;
    gap: 30px;
    flex: 1;
`

export const LimitContainer = styled.div`
    ${flexContainerStyles};
    flex-direction: column;
    width: 500px;
    height: 400px;
    border: 2px black solid;
    border-radius: 6px;
    padding: 20px;
`

export const DisplaysContainer = styled.div`
    ${flexContainerStyles};
    width: 100%;
    gap: 20px;
`

export const DisplayRed = styled.div`
    ${displayBasicStyles};
    color: red;
`

export const DisplayBlue = styled.div`
    ${displayBasicStyles};
    color: blue;
`

export const InputsContainer = styled.div`
    ${flexContainerStyles};
    flex-direction: column;
    width: 100%;
    padding: 20px;
    gap: 20px;
`