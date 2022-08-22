import React, { useState } from "react";
import Grid from "../grid";
import { FormConteiner, InputContent, Label, RadioGroup, Input, Button } from "./style";

export const Form = ({handleAdd, trasactionsList,setTrasactionsList}) => {

    const [desc,setDesc] = useState('');
    const [amount,setAmout] = useState('');
    const [isExpense,setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() *1000)

    const handleSave = () => {

        if(!desc || !amount) {
            alert("informe a descrição e o valor!");
            return;
        } else if(!desc || !amount) {
            alert("o valor tem que ser poitivo");
            return;
        }

    const trasaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
    }

    handleAdd(trasaction);

    setDesc("");
    setAmout("");

    }

    return (
        <>
            <FormConteiner>
                <InputContent>
                    <Label>Description</Label>
                    <Input value={desc} onChange={(e)=> setDesc(e.target.value)}/>
                </InputContent>


                <InputContent>
                    <Label>Value</Label>
                    <Input type="number" value={amount} onChange={(e)=> setAmout(e.target.value)}/>
                </InputContent>

                <RadioGroup>
                    <Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={()=> setExpense(!isExpense)}
                    />
                    <Label htmlFor="rIncome">Input</Label>

                    <Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={()=> setExpense(!isExpense)}
                    />
                    <Label htmlFor="rExpenses">Output</Label>

                    <Button onClick={handleSave}>Add</Button>
                </RadioGroup>
            </FormConteiner>
            <Grid itens={trasactionsList} setItens={setTrasactionsList}/>
        </>
    )

}