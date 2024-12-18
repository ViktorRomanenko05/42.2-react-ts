import {ClientsPage, ClientLink, PageTitle} from "./styles";

function Clients () {
    return (
        <ClientsPage>
            <PageTitle>Clients:</PageTitle>
            <ClientLink to="chainlink">Chainlink</ClientLink>
            <ClientLink to="ontology">Ontology</ClientLink>
            <ClientLink to="storj">Storj</ClientLink>
        </ClientsPage>
    )
}

export default Clients;