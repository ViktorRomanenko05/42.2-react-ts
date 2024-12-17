export interface EmployeeFormValue {
    employee_email: string,
    employee_surname: string,
    employee_age: string,
    employee_position: string,
    employee_agreement: boolean
}

export enum EMPLOYEE_FORM_FIELDS {
    NAME = "employee_email",
    SURNAME = "employee_surname",
    AGE = "employee_age",
    POSITION = "employee_position",
    AGREEMENT = "employee_agreement"
}