import styled from "@emotion/styled";


export const ButtonComponent = styled.button`
    width: 100%;
    height: 70px;
    outline: none;
    border: none;
    padding: 20px;
    border-radius: 4px;
    color: white;
    font-family: Lato, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    cursor: pointer;
    background-color: ${(props) => props.disabled?  "#a4a5ba" : "#1f27f5"};`

// background-color: ${(props) => props.primary ? "red" : 'blue'};

/* old styles */
/* .main-button {
  width: 300px;
  padding: 20px 30px;
  background-color: #1d2a55;
  font-size: 28px;
  color: aliceblue;
  border: none;
  border-radius: 4px;
} */