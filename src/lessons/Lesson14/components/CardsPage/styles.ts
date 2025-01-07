import styled from "@emotion/styled";

export const CardsPageWrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 70px;
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 700px;
    height: 70px;
`

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 1350px;
    height: 100%;
    overflow-x: auto;
`

export const NoEmployeesText = styled.h2`
font-weight: 400;
    color: red;
`