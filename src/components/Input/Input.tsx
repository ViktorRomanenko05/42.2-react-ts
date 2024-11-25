import "./styles.css"
import {InputProps} from "./types"

function Input({inputParameters}: InputProps) {
    return (
        <label className="label-field">
            {inputParameters.label}
            <input className="input-field" name={inputParameters.name} type={inputParameters.type}
                   placeholder={inputParameters.placeholder}/>
        </label>
    );
}

export default Input;