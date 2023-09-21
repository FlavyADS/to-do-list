import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './Global'
import Lista from './components/Lista'
import Input from './components/Input'

const Title = styled.h1`
    display: flex;
    align-items: center;
    color: #6C584C;
    font-size: 2.5rem;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold; 
    display: flex;
    padding: 2rem;
`

const App = () => {
  const [novos, setNovos ] = React.useState([
    { id: 1,
      text: 'teste',
      finalizada: false,
    }
  ]) 

  const salvaForm = (text) => {
    const newNovos = [
      ... novos, 
      {
        id: Math.floor(Math.random()*1000),
        text,
        finalizada: false,
      }
    ]
    setNovos(newNovos)
  }

  const removeItem = (id) => {
    const newNovos = [...novos]
    const filterNovos = newNovos.filter((novo) => 
      novo.id !== id ? novo:null
    )
    setNovos(filterNovos)
  }

  const finalizaItem = (id) => {
    const newNovos = [...novos]
    newNovos.map((novos) => novos.id === id ? (novos.finalizada = !novos.finalizada) : novos
    )
    setNovos(newNovos)
  }
 
  return (
    <>
    <GlobalStyle />
     <Title> &#10024; Lista de tarefas &#128221;</Title>
     <Input salvaForm={salvaForm} />
      {novos.map((novo) =>
      <Lista key={novo.id} novo={novo} removeItem={removeItem} finalizaItem={finalizaItem}/>
      )}
    </>
 
  )
}

export default App
