import React from 'react'
import styled from 'styled-components'

const InputText = styled.input`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 4rem;
    border: none;
    border-radius: 12px;
    padding: 1rem;
    background-color: #DDE5B6;
    color: #6C584C;
    font-size: 1.1rem;
    font-family: 'Roboto Mono', monospace;
    font-weight: Bold;
    cursor: text;
`
const ButtonE = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #A98467;
  border: none;
  border-radius: 12px;
  width: 4rem;
  height: 4rem;
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 1rem; 
`
const Form = styled.form`
  display: flex;
`

const Input = ({ salvaForm }) => {
    const [valor, setValor] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if(!valor) return;
        salvaForm(valor)
        setValor("")
    }

  return (
    <div>
    <Form onSubmit={handleSubmit}>
     <InputText
      placeholder="\...."
      type="text"
      value={valor}
      onChange={(event) => setValor(event.target.value)}
     />
     <ButtonE>Enviar</ButtonE>
     </Form>
    </div>
  )
}

export default Input
