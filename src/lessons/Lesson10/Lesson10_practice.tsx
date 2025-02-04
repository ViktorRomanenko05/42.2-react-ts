import {v4} from "uuid";
import axios from "axios";
import {useState, useEffect} from "react";
import Button from "../../components/Button/Button";
import {
    Lesson10container,
    ButtonsBlock,
    ResultContainer,
    DeleteButtonWrapper,
    FactItemContainer,
    Spinner,
    ErrorMessageDisplay,
    PageTitle
} from "./styles";

const CAT_FACT_URL = "https://catfact.ninja/fact";

//интерфейс для типизации получаемого объекта
interface CatFact {
    fact: string,
    length: number
}

//интерфейс для типизации объекта состоящего из необходимых
//текста и присвоенного id (используется для удаления)
interface FactUnit {
    id: string,
    factText: string
}

function Lesson10_practice() {

    const [factsList, setFactsList] = useState<FactUnit[]>([]);
    const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
    const [error, setError] = useState<any>(undefined);

    //Запрашиваем данные при монтировании (первом рендеринге) элемента
    useEffect(() => {
        if (factsList.length === 0) {    //Иногда хук срабатывал при переключениях
            getFact();
        }                   //между окнами и вкладками, поэтому добавил if
    }, []);

    //Функция для запроса факта
    const getFact = async () => {
        setError(undefined);
        try {
            setLoadingStatus(true);
            const response = await axios.get(CAT_FACT_URL);
            const newFact: CatFact = response.data;
            const newFactUnit: FactUnit = {
                id: v4(),
                factText: newFact.fact,
            }
            setFactsList((previousFacts) => [...previousFacts, newFactUnit]);
        } catch (error) {
            setError(error);
        } finally {
            setLoadingStatus(false);
        }
    }

    //Функция для удаления всех полученных фактов
    const deleteAllData = (): void => {
        setFactsList([]);
    }

    //Функция для удаления отдельного факта
    const deleteFact = (idForRemove: string) => {
        setFactsList((previousFacts) => previousFacts.filter((unit) => unit.id !== idForRemove));
    }

    return (
        <Lesson10container>
            <PageTitle>CATFACTS</PageTitle>
            <ButtonsBlock>
                <Button name={"GET MORE INFO"}
                        onClick={getFact}
                        loading={loadingStatus}
                        disabled={loadingStatus}
                        spinner={<Spinner/>}/>
                {factsList.length !== 0 &&
                    <Button name={"DELETE ALL DATA"} onClick={deleteAllData}/>}
            </ButtonsBlock>
            {error && (
                <ErrorMessageDisplay>{error.message}</ErrorMessageDisplay>
            )}
            {factsList.length > 0 && (
                <ResultContainer>
                    {factsList.map((factItem: FactUnit) => (
                        <FactItemContainer key={factItem.id}>
                            {factItem.factText}
                            <DeleteButtonWrapper>
                                <Button name="DELETE" onClick={() => deleteFact(factItem.id)}/>
                            </DeleteButtonWrapper>
                        </FactItemContainer>
                    ))}
                </ResultContainer>
            )}
        </Lesson10container>
    )
}

export default Lesson10_practice;