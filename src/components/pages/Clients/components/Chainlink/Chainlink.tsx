import GoBack from "../../../../GoBack/GoBack";
import {ChainlinkPage, PageTitle, Description} from "./styles"
import {chainlinkDescription} from "../data";

function Chainlink (){
    return(
        <ChainlinkPage>
            <PageTitle>Chainlink</PageTitle>
            <Description>{chainlinkDescription}</Description>
            <GoBack />
        </ChainlinkPage>
    )
}

export default Chainlink;