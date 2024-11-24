import "./styles.css"

function Input({name, type, placeholder, label}) {
    return (
        <label className = "label-field">
            {label}
            <input className="input-field" name={name} type={type} placeholder={placeholder} />
        </label>
    );
}

export default Input;