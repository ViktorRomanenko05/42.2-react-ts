import {ChangeEvent, useState} from "react";
import {
    DisplayBlue,
    DisplayRed,
    DisplaysContainer,
    Homework08Container,
    InputsContainer,
    LimitContainer
} from "./styles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";


function Homework08() {
//Хуки для дисплеев
    const [redDisplayValue, setRedDisplayValue] = useState<string>('');
    const [blueDisplayValue, setBlueDisplayValue] = useState<string>('');

//Хуки для инпутов
    const [redInputValue, setRedInputValue] = useState<string>('');
    const [blueInputValue, setBlueInputValue] = useState<string>('');

    //Отслеживаем изменения инпута с помощью "onChange" и контролируем его состояние
    const onChangeRedInput = (event: ChangeEvent<HTMLInputElement>) => {
        setRedInputValue(event.target.value)
    };

    const onChangeBlueInput = (event: ChangeEvent<HTMLInputElement>) => {
        setBlueInputValue(event.target.value)
    }

    //При нажатии кнопки устанавливаем текущие состояния дисплеев
    //согласно состояниям соответствующих инпутов
    const handleButtonClick = () => {
        setBlueDisplayValue(blueInputValue)
        setRedDisplayValue(redInputValue)
    }


    return (
        <Homework08Container>
            <LimitContainer>
                <DisplaysContainer>
                    <DisplayRed>{redDisplayValue}</DisplayRed>
                    <DisplayBlue>{blueDisplayValue}</DisplayBlue>
                </DisplaysContainer>
                <InputsContainer>
                    <Input name='redInput' placeholder="Input for the red display" onChange={onChangeRedInput}
                           value={redInputValue}/>
                    <Input name='blueInput' placeholder="Input for the blue display" onChange={onChangeBlueInput}
                           value={blueInputValue}/>
                </InputsContainer>
                <Button name="Display the result" onClick={handleButtonClick}/>
            </LimitContainer>
        </Homework08Container>
    )
}

export default Homework08;