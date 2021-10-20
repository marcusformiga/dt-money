import { Summary } from "../Summary";
import {TransactionsTable } from "../Table";
import { Container } from "./style";
export function DashBoard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
