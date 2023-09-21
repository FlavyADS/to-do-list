import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/fontawesome-free-solid';

const List = styled.li`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  border-radius: 12px;
  list-style: none;
  font-size: 1.3rem;
  font-family: "Roboto Mono", monospace;
  font-weight: Bold;
  padding: 1rem;
  color:#6c584c;
`;

const ButtonF = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #adc178;
  border: none;
  border-radius: 10px;
  width: 4rem;
  height: 2rem;
  color: #6c584c;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: .8rem; 
`

const ButtonD = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d08c60;
  border: none;                                                                                                                                                                                                                                                                                                                                                                                                 
  border-radius: 12px;
  width: 4rem;
  height: 2rem;
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 1rem; 
`
const Texto = styled.p `
  display: flex;
  flex-wrap: wrap;
  flex: 1; 
  align-items: center;
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  font-weight: Bold;
  padding: .8rem;
  color: #6c584c;
`

const Lista = ({ novo, removeItem, finalizaItem }) => {

  return (
      <div>
        <List style={{ backgroundColor: novo.finalizada ? "#b7b7a4" : "#FFCB69"}}>
          <Texto 
          style={{ textDecoration: novo.finalizada ? "line-through" : ""}}>→ {novo.text}</Texto>
          <ButtonF 
          style={{ backgroundColor: novo.finalizada ? "#6b705c" : "#adc178"}}
          onClick={() => finalizaItem(novo.id)}>Concluir</ButtonF>
          <ButtonD 
          style={{ backgroundColor: novo.finalizada ? "#6b705c" : "#d08c60"}}
          onClick={() => removeItem(novo.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </ButtonD> 
        </List>
      </div>
  );
};

export default Lista;
