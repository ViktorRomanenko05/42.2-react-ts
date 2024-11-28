import "./styles";
import {InputContainer, LabelForInput, InputElement} from "./styles";
import { InputProps } from './types'

function Input({ name, id, type = 'text', placeholder, label }: InputProps) {
    return (
        <InputContainer>
            {/* Пример оператора условного рендеринга */}
            {label && <LabelForInput htmlFor={id}>{label}</LabelForInput>}
            <InputElement
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </InputContainer>
    );
}

export default Input;