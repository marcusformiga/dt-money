import { Container } from "./style";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income" />
                    <strong className="deposit">R$+1000,00</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="outcome" />
                    <strong className="withdraw">R$-500,00</strong>
                </header>
            </div>
            <div className="bg-green">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                    <strong>R$500,00</strong>
                </header>
            </div>
        </Container>
    )
}
