import { Container } from "./style";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

export function Summary() {
    const { transactions } = useContext(TransactionContext)
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === "deposit") {
            acc.deposits += transaction.value
            acc.total = transaction.value
        } else {
            acc.withdraw -= transaction.value
            acc.total = transaction.value
        }
        return acc
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income" />
                    <strong className="deposit">{summary.deposits}</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="outcome" />
                    <strong className="withdraw">{summary.withdraw}</strong>
                </header>
            </div>
            <div className="bg-green">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                    <strong>{summary.total}</strong>
                </header>
            </div>
        </Container>
    )
}
