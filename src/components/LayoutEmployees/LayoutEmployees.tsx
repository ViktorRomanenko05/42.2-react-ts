import {LayoutEmployeeProps} from "./types";
import {useNavigate} from "react-router-dom";
import {
    HeaderEmployees,
    LayoutEmployeesComponent,
    MainEmployeesSpace,
    NavContainerEmployees,
    NavLinkEmployee
} from "./styles";
import {LogoContainer} from "../Layout/styles";

function LayoutEmployees ({children} : LayoutEmployeeProps){

    const navigate = useNavigate()

    return(
        <LayoutEmployeesComponent>
            <HeaderEmployees>
                <LogoContainer onClick={()=>{navigate("/")}}></LogoContainer>
                <NavContainerEmployees>
                    <NavLinkEmployee to = "/" style = {({isActive})=>({textDecoration: isActive ? "underline" : "none"})}>Create employee</NavLinkEmployee>
                    <NavLinkEmployee to = "/employees" style = {({isActive})=>({textDecoration: isActive ? "underline" : "none"})}>Employees</NavLinkEmployee>
                </NavContainerEmployees>
            </HeaderEmployees>
            <MainEmployeesSpace>
                {children}
            </MainEmployeesSpace>
        </LayoutEmployeesComponent>
    )
}

export default LayoutEmployees;