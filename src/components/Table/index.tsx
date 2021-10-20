import { Container } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AxiosResponse } from "axios"

interface Transaction {
  id: number
  title: string
  value: number
  category: string
  type: string
  createdAt: Date
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
   api.get("transactions").then(response => setTransactions(response.data))
 }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.value}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
                </tr>
            )
          })}            
         
        </tbody>
      </table>
    </Container>
  );
}
