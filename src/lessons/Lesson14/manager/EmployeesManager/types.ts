export interface FullEmployeeData {
    id: string;
    name: string;
    surname: string;
    age: string;
    position: string;
}

export interface EmployeeData {
    name: string;
    surname: string;
    age: string;
    position: string;
}

export interface EmployeesContextData {
    employees: FullEmployeeData[];
    addEmployee: (employee: EmployeeData) => void;
    deleteEmployee: (idForRemove: string) => void;
    deleteAllEmployees: () => void;
}