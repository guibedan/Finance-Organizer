import React, { useState } from "react";
import Grid from "../grid";
import { FormConteiner, InputContent, Label, RadioGroup, Input, Button } from "./style";

export const Form = ({handleAdd, transactionsList, setTransactionsList}) => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }
    const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
    };
      
          handleAdd(transaction);
      
          setDesc("");
          setAmount("");
        };

    return (
        <>
            <FormConteiner>
                <InputContent>
                    <Label>Description</Label>
                    <Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </InputContent>


                <InputContent>
                    <Label>Value</Label>
                    <Input 
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </InputContent>

                <RadioGroup>
                    <Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <Label htmlFor="rIncome">Input</Label>

                    <Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <Label htmlFor="rExpenses">Output</Label>

                    <Button onClick={handleSave}>Add</Button>
                </RadioGroup>
            </FormConteiner>
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    )

}