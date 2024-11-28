import "./styles";
import {Homework07Container, ButtonsSection} from "./styles";
import Button from "../../components/Button/Button";

function Homework07() {
    return (
        <Homework07Container>
            <ButtonsSection>
            <Button name="Active"></Button>
            <Button name="Disabled" disabled></Button>
            </ButtonsSection>
        </Homework07Container>
    );
}

export default Homework07;