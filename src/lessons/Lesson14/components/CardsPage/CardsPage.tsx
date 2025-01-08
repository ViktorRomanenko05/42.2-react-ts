import {CardsPageWrapper, ButtonContainer, CardsContainer, NoEmployeesText} from "./styles";
import {useContext} from "react";
import {EmployeesContext} from "../../manager/EmployeesManager/EmployeesProvider";
import Button from "../../../../components/Button/Button";
import {FullEmployeeData} from "../../manager/EmployeesManager/types";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

function EmployeesPage () {
    const { employees, deleteAllEmployees } = useContext(EmployeesContext);
    return(
        <CardsPageWrapper>
            {employees.length === 0 &&
            <NoEmployeesText>NO EMPLOYEES YET</NoEmployeesText>}
            <CardsContainer>
                {employees.map((employee: FullEmployeeData)=>(
                    <EmployeeCard {...employee}></EmployeeCard>

                ))}

            </CardsContainer>
            <ButtonContainer>
                {employees.length !== 0 && 
                <Button name={"Delete All Employees"} onClick={deleteAllEmployees} backgroundColor={"#CF0000"} />}
            </ButtonContainer>

        </CardsPageWrapper>
    )
}

export default EmployeesPage;