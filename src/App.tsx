import React from 'react';
import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from "react-modal"
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewModal}/>
      <DashBoard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={ handleCloseNewTransactionModal}/>
    </>
  );
}

