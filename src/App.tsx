import React from 'react';
import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from "react-modal"
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from "../src/context/TransactionContext"

Modal.setAppElement("#root")
export function App() {
   const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
     useState(false);
   function handleOpenNewModal() {
     setIsNewTransactionModalOpen(true);
   }
   function handleCloseNewTransactionModal() {
     setIsNewTransactionModalOpen(false);
   }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewModal}/>
      <DashBoard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionProvider>
  );
}

