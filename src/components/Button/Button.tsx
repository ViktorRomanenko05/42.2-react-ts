import "./styles.ts";
import { ButtonProps } from "./types";
import { MainButton } from './styles';

function Button({ name, type = "button", onClick, disabled = false, loading=false, spinner}: ButtonProps) {
    // console.log(props.buttonName);

    return (
        <MainButton onClick={onClick} type={type} disabled={disabled} >
            {loading ? spinner : name}
        </MainButton>
    );
}

export default Button;