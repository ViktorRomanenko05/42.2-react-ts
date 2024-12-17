import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 590px;
    padding: 60px;
    border: 1px solid black;
    border-radius: 4px;
    font-family: Lato, Geneva, Tahoma, sans-serif;
`;

export const EmployeeFormTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const CheckboxContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`;

export const CheckboxLabel = styled.label`
 font-size: 20px;
`;

export const Checkbox = styled.input`
 width: 25px;
 height: 25px;
`;