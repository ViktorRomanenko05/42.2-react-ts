import {useFormik} from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.ts";
import {EmployeeFormWrapper, EmployeeFormTitle, InputsContainer, CheckboxLabel, Checkbox, CheckboxContainer} from './styles';
import {EmployeeFormValue, EMPLOYEE_FORM_FIELDS} from "./types";

function EmployeeForm() {

    const scheme = Yup.object().shape({
        [EMPLOYEE_FORM_FIELDS.NAME]: Yup.string()
            .required('Required field')
            .test('check min length', 'Min 2 symbols', value => value.length >= 2)
            .test('check max length', 'Max 50 symbols', value => value.length <= 50),
        [EMPLOYEE_FORM_FIELDS.SURNAME]: Yup.string()
            .required('Required field')
            .test('check max length', 'Max 15 symbols', value => value.length <= 15),
        [EMPLOYEE_FORM_FIELDS.AGE]: Yup.number()
            .min(18, 'Min age 18')
            .max(80, 'Max age 80'),
        [EMPLOYEE_FORM_FIELDS.POSITION]: Yup.string()
            .required('Required field')
            .test('check max length', 'Max 30 symbols', value => value.length <= 30),
        [EMPLOYEE_FORM_FIELDS.AGREEMENT]: Yup.boolean().oneOf([true], 'Accept agreement'),
    })

    const formik = useFormik({
        initialValues: {
            [EMPLOYEE_FORM_FIELDS.NAME]: "",
            [EMPLOYEE_FORM_FIELDS.SURNAME]: "",
            [EMPLOYEE_FORM_FIELDS.AGE]: "",
            [EMPLOYEE_FORM_FIELDS.POSITION]: "",
            [EMPLOYEE_FORM_FIELDS.AGREEMENT]: false
        } as EmployeeFormValue,
        validationSchema: scheme,
        validateOnChange: false,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
            <EmployeeFormTitle>Employee form</EmployeeFormTitle>
            <InputsContainer>
                <Input
                    name={EMPLOYEE_FORM_FIELDS.NAME}
                    id="user_name"
                    placeholder="Enter your email"
                    label="Name*"
                    value={formik.values[EMPLOYEE_FORM_FIELDS.NAME]}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_FIELDS.NAME]}
                />
                <Input
                    name={EMPLOYEE_FORM_FIELDS.SURNAME}
                    id="user_surname"
                    placeholder="Enter your password"
                    label="Surname*"
                    value={formik.values[EMPLOYEE_FORM_FIELDS.SURNAME]}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_FIELDS.SURNAME]}
                />
                <Input
                    name={EMPLOYEE_FORM_FIELDS.AGE}
                    id="user_age"
                    placeholder="Enter your password"
                    label="Age"
                    value={formik.values[EMPLOYEE_FORM_FIELDS.AGE]}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_FIELDS.AGE]}
                />
                <Input
                    name={EMPLOYEE_FORM_FIELDS.POSITION}
                    id="user_position"
                    placeholder="Enter your password"
                    label="Position*"
                    value={formik.values[EMPLOYEE_FORM_FIELDS.POSITION]}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_FIELDS.POSITION]}
                />
                <CheckboxLabel htmlFor='agree_id'>I agree to the terms</CheckboxLabel>
                <CheckboxContainer>
                    <Checkbox
                        type='checkbox'
                        id='agree_id'
                        name={EMPLOYEE_FORM_FIELDS.AGREEMENT}
                        onChange={formik.handleChange}
                        checked={formik.values[EMPLOYEE_FORM_FIELDS.AGREEMENT]}
                    />
                </CheckboxContainer>
            </InputsContainer>
            <Button name="Login" type="submit" disabled = {!formik.values[EMPLOYEE_FORM_FIELDS.AGREEMENT]}/>
        </EmployeeFormWrapper>
    );

}

export default EmployeeForm;