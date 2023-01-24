// importando o React e Styled Components
import React from "react"
import styled from "styled-components" 

// criando o modelo
const Modelo = styled.div` 
    overflow: hidden; 
`

const ModeloTitulo = styled.div` 
    font-size: 32pt; 
    padding: 32px 0; 
    text-align: center; 
` 

const ModeloBotoes = styled.div` 
    display: flex; 
    gap: 32px; 
    justify-content: center; 
`

// exportando a function do component
export default function Navegacao(props) { 

    // retornando os elementos do componente
    return <Modelo> 

        <ModeloTitulo> { props.titulo } </ModeloTitulo> 

        <ModeloBotoes> { props.children } </ModeloBotoes> 

    </Modelo> 
}