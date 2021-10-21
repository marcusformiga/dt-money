import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
  createdAt: Date;
}
interface TransactionProviderProps {
    children: ReactNode
}
type CreateTransaction = Omit<Transaction, "id" | "createdAt">

interface TransactionContextData {
    transactions: Transaction[]
    createTransactions: (transaction: CreateTransaction) => Promise<void>
}
export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)


export function TransactionProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  async function createTransactions(
    transactionInput: CreateTransaction
  ) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction
    ]);
  }
    useEffect(() => {
      api
        .get("transactions")
        .then((response) => setTransactions(response.data.transactions));
    }, []);
    return (
      <TransactionContext.Provider
        value={{
          transactions,
          createTransactions
        }}
      >
        {children}
      </TransactionContext.Provider>
    );
}