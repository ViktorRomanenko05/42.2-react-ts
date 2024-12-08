import "./styles.ts";
import { ButtonProps } from "./types";
import { MainButton } from './styles';
import {Spinner} from "../../lessons/Lesson10/styles";

function Button({ name, type = "button", onClick, disabled = false, loading=false}: ButtonProps) {
    // console.log(props.buttonName);

    return (
        <MainButton onClick={onClick} type={type} disabled={disabled} >
            {loading ? <Spinner /> : name}
        </MainButton>
    );
}

export default Button;