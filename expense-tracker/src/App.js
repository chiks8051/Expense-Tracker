import React from 'react';
import Expense from './Expense';
import './App.css'
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <SnackbarProvider >
      <div>
        <Expense />
      </div>
    </SnackbarProvider>
  );
}

export default App;