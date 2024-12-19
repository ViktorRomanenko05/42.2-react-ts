import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const ClientsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 32px;
    padding: 30px;
`

export const PageTitle = styled.h3``

export const ClientLink = styled(Link)`
text-decoration: none;
`