import "./styles.css"
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm  ()  {
    return (
        <form className="login-form">
            <h3 className="login-header">Login form</h3>
            <div className="inputs-container">
                <Input type="text" placeholder="Enter your email" label="Email" name="email"/>
                <Input type="password" placeholder="Enter your password" label="Password" name="password"/>
            </div>
            <Button type="submit" name="Login"></Button>
        </form>
    )
}

export default LoginForm