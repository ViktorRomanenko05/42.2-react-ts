import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {
    Homework09wrapper,
    PictureWrapper,
    DogsImage,
    InputsContainer,
    ErrorOutputContainer
} from "./styles";
import Input from "../../components/Input/Input";

function Homework09() {
    const [inputOneValue, setInputOneValue] = useState<string>("");
    const [inputTwoValue, setInputTwoValue] = useState<string>("");
    const [dogImageUrl, setDogImageUrl] = useState<string>("");
    const [error, setError] = useState<any>(undefined);

    const onChangeInputOne = (event: ChangeEvent<HTMLInputElement>) => {
        setInputOneValue(event.target.value);
    };
    const onChangeInputTwo = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTwoValue(event.target.value);
    };

    const DOG_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";

    const fetchDogImage = async () => {
        setDogImageUrl("")

        try {
            const response = await axios.get(DOG_IMAGE_URL);
            setDogImageUrl(response.data.message);
        }
        catch (error){
            setError(error);
        }
    };

    useEffect(() => {
        fetchDogImage()
    }, [inputOneValue])

    return (
        <Homework09wrapper>
            <InputsContainer>
            <Input
                   name="input-one"
                   placeholder="dogs search"
                   onChange={onChangeInputOne}
                   value={inputOneValue}/>
            <Input name="input-two"
                   placeholder="dogs notes"
                   onChange={onChangeInputTwo}
                   value={inputTwoValue}/>
            </InputsContainer>
            {error && <ErrorOutputContainer>{error.message}</ErrorOutputContainer>}
            <PictureWrapper>
                <DogsImage src={dogImageUrl} alt="dogs picture"/>
            </PictureWrapper>
        </Homework09wrapper>
    );
}

export default Homework09;