import GoBack from "../../../../GoBack/GoBack";
import {StorjPage, PageTitle, Description} from "./styles"
import {storjDescription} from "../data";

function Storj (){
    return(
        <StorjPage>
            <PageTitle>Storj</PageTitle>
            <Description>{storjDescription}</Description>
            <GoBack />
        </StorjPage>
    )
}

export default Storj;