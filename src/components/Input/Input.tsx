import "./styles";
import {InputProps} from './types';
import {InputContainer, InputElement, Label} from './styles';

function Input({name, id, type = 'text', placeholder, label, onChange, value}: InputProps) {
    return (
        <InputContainer>
            {/* Пример оператора условного рендеринга */}
            {label && <Label htmlFor={id}>{label}</Label>}
            <InputElement
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </InputContainer>
    );
}

export default Input;