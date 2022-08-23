import React from "react";
import GridItem from "./gridItem";
import * as C from "./style";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };


  return (
    <C.GridConteiner>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Description</C.Th>
          <C.Th width={40}>Value</C.Th>
          <C.Th width={10} alignCenter>
            Type
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
      {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.GridConteiner>
  );
};

export default Grid;