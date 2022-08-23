import React, { useState, useEffect, createContext } from "react";
import { Header } from "../Header";
import { Resume } from "../Resume";
import { Form } from "../form";
import { Global } from '../../style'

export const ThemeContext = createContext(null);

const App= () => {

  const data = localStorage.getItem("trasactions");
  const [transactionsList, setTrasactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

      const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

  }, [transactionsList]);

    const handleAdd = (transaction) => {
      const newArrayTras = [...transactionsList, transaction];

      setTrasactionsList(newArrayTras);

      localStorage.setItem("transactions", JSON.stringify(newArrayTras));

    }

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }


  return (

    <>
      <ThemeContext.Provider value={{theme, setTheme} }>
          <Header/>
          <Resume income={income} expense={expense} total={total}/>
          <Form 
            handleAdd={handleAdd} 
            transactionsList={transactionsList} 
            setTrasactionsList={setTrasactionsList}
          />
          <Global id={theme}/>
      </ThemeContext.Provider>
    </>


  );
}


export default App;


