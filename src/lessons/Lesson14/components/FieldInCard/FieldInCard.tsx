import {CardFieldTitle, CardFieldValue, CardFieldWrapper} from "./styles";
import {FieldProps} from "./types";

function FieldInCard(field: FieldProps) {
    return (
        <CardFieldWrapper>
            <CardFieldTitle>{field.title}</CardFieldTitle>
            <CardFieldValue>{field.value}</CardFieldValue>
        </CardFieldWrapper>
    )
}

export default FieldInCard;