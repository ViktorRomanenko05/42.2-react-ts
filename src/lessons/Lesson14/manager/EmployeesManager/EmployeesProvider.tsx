import {createContext, useState} from "react";
import {EmployeeData, FullEmployeeData, EmployeesContextData} from "./types";
import {v4} from "uuid";

// Создаём контекст с дефолтными значениями
export const EmployeesContext = createContext<EmployeesContextData>({
    employees: [],
    addEmployee: () => {},
    deleteEmployee: () => {},
    deleteAllEmployees: () => {},
});

//Создаем компонент - провайдер для централизованного управления данными
const EmployeesProvider = ({children}: any) => {
    const [employees, setEmployees] = useState<FullEmployeeData[]>([]);

    // Функция для добавления сотрудника
    const addEmployee = (employee: EmployeeData) => {
        const newEmployee: FullEmployeeData = {
            id: v4(),
            ...employee,
        };
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    };

    //Функция для удаления данных сотрудника
    const deleteEmployee = (idForRemove: string) => {
        setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.id !== idForRemove)
        );
    };

    //Функция для удаления данных всех соотрудников
    const deleteAllEmployees = () => {
        setEmployees([]);
    };

    return (
        <EmployeesContext.Provider
            value={{
                employees: employees,
                addEmployee: addEmployee,
                deleteEmployee: deleteEmployee,
                deleteAllEmployees: deleteAllEmployees,
            }}
        >
            {children}
        </EmployeesContext.Provider>
    );
};

export default EmployeesProvider;