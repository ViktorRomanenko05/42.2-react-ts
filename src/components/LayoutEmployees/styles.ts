import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutEmployeesComponent = styled.div`
display: flex;
    flex-direction: column;
    flex: 1;
`

export const HeaderEmployees = styled.header`
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 81px;
    width: 100%;
    height: 120px;
    background-color: #FAF9FF;
    border: 2px solid #000000;
    color: #000000;
`

export const LogoEmployees = styled.div`
display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: grey;
`

export const NavContainerEmployees = styled.nav`
display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

export const NavLinkEmployee = styled(NavLink)`
    text-decoration: none;
    font-size: 28px;
    font-weight: 400;
    color: #000000
`

export const MainEmployeesSpace = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #112233;
    padding: 50px;
`