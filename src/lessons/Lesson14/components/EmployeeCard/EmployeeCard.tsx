import {EmployeeCardUnit} from "./styles";
import FieldInCard from "../FieldInCard/FieldInCard";
import {EmployeeCardProps} from "./types";
import Button from "../../../../components/Button/Button";
import {useContext} from "react";
import {EmployeesContext} from "../../manager/EmployeesManager/EmployeesProvider";

function EmployeeCard(data: EmployeeCardProps) {
    const {deleteEmployee} = useContext(EmployeesContext);
    return (
        <EmployeeCardUnit>
            <FieldInCard title={"Name"} value={data.name}/>
            <FieldInCard title={"Surname"} value={data.surname}/>
            <FieldInCard title={"Age"} value={data.age}/>
            <FieldInCard title={"Job Position"} value={data.position}/>
            <Button name={"Delete"} onClick={() => {
                deleteEmployee(data.id)
            }} backgroundColor={"#CF0000"}/>
        </EmployeeCardUnit>
    )
}

export default EmployeeCard;