import "./styles";
import { ButtonProps } from "./types";
import {ButtonComponent} from "./styles";

function Button({ name, type = "button", disabled, onClick }: ButtonProps) {
    // console.log(props.buttonName);

    return (
        <ButtonComponent onClick={onClick} type={type} disabled={disabled}>
            {name}
        </ButtonComponent>
    );
}

export default Button;