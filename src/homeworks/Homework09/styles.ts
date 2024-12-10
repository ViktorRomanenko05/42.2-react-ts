import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexContainerStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Homework09wrapper = styled.div`
    ${flexContainerStyles};
    gap: 30px;
    margin: 50px;
    flex: 1;
`
export const InputsContainer = styled.div`
    ${flexContainerStyles};
    width: 500px;
    gap: 20px;
`

export const PictureWrapper = styled.div`
    max-width: 500px;
    height: 500px;
    
`

export const DogsImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const ErrorOutputContainer = styled.div`
    font-size: 28px;
    color: red;
`