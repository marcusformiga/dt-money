import Modal from "react-modal"
import { Container, TransactionsBtnContainer, RadioBox } from "./style"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useContext, useState } from "react"
import { TransactionContext } from "../../context/TransactionContext"
interface NewTransactionModalProps  {
    isOpen: boolean
    onRequestClose: () => void
}

export async function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransactions } = useContext(TransactionContext)
    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState("")
    const [value, setValue] = useState(0)
  const [category, setCategory] = useState("")
  
    function handleForm(e: FormEvent) {
        e.preventDefault()
       
    }
 await createTransactions({
    category,
    title,
    type,
    value
 })
  function clearData(): void{
    setType("")
    setTitle("")
    setValue(0)
    setCategory("")
  }
  onRequestClose()
  clearData()
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="modal-close">
          <img src={closeImg} alt="fechar" />
        </button>
        <Container onSubmit={handleForm}>
                <input type="text" placeholder="titulo"
                    value={title}
                    onChange={e => setTitle(e.target.value) }/>
                <input type="number" placeholder="valor"
                    value={value}
                    onChange={e => setValue(+e.target.value) }/>
          <TransactionsBtnContainer>
            <RadioBox type="button" onClick={() => setType("deposit")} isActive={type === "deposit"}>
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
            </RadioBox>
            <RadioBox type="button" isActive={type === "withdraw"}>
                        <img src={outcomeImg} alt="saida" onClick={() => setType("withdraw") }/>
                        <span>Saida</span>
            </RadioBox>
          </TransactionsBtnContainer>
                <input type="text" placeholder="categoria"
                    value={category}
                    onChange={e => setCategory(e.target.value) }/>
          <input type="submit" value="cadastrar" />
        </Container>
      </Modal>
    );
}