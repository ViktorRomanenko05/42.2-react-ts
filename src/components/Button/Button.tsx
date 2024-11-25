import "./styles.css";
import {ButtonProps} from "./types";

function Button({buttonParameters}: ButtonProps) {
    // console.log(props.buttonName);

    return (
        <button className="main-button" onClick={buttonParameters.onClick} type={buttonParameters.type}>
            {buttonParameters.name}
        </button>
    );
}

export default Button;