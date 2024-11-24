import "./styles.css";

function Button({ name, type = "button", onClick}) {
    // console.log(props.buttonName);

    return (
        <button className="main-button" onClick={onClick} type={type}>
            {name}
        </button>
    );
}

export default Button;