import GoBack from "../../../../GoBack/GoBack";
import {OntologyPage, PageTitle, Description} from "./styles"
import {ontologyDescription} from "../data";

function Ontology (){

    return(
        <OntologyPage>
            <PageTitle>Ontology</PageTitle>
            <Description>{ontologyDescription}</Description>
            <GoBack />
        </OntologyPage>
    )
}

export default Ontology;