import React from "react";
import styled from "styled-components"

const DivInputs = styled.div `
height: 13vh;
margin-top: 2vh;
>*{
    margin-left: 5px;
}
`
const Strong = styled.strong `
margin-right: 8px;
`

const DivEscrita = styled.div `
background-color: #6BACFF;
border-radius: 10px;
min-width: 100px;
max-width: 400px;
margin-left: 15px;
margin-bottom: 5px;
padding-left: 16px;
display: flex;
`
const InputUsuario = styled.input `
padding: 8px;
width: 100px;
outline: none;
border: none;
border-bottom: 3px solid black;
border-radius: 10px;
`
const InputMensagem = styled.input `
padding: 8px;
width: 400px;
outline: none;
border: none;
border-bottom: 3px solid black;
border-radius: 10px;
`
const Botao = styled.button `
background-color: #FABE50;
padding: 8px;
width: 100px;
outline: none;
border: none;
border-bottom: 3px solid black;
border-radius: 10px;
`
const DivPai = styled.div `
background-color: #509BFA;
display: flex;
flex-direction: column-reverse;
align-items: center;
`
const DivCaixa = styled.div `
margin-top: 2vh;
min-height: 83vh;
background-color: #FFF;
display: flex;
flex-direction: column-reverse;
width: 50vw;
border-radius: 10px;
`

class Labezap extends React.Component {
    state = {
       mensagemUsuario: [
        ],

        valorInputUsuario: "",
        valorInputMensagem: "",

    }

    adicionaMensagemUsuario = () => {
        const novaMensagem = {
            Usuario: this.state.valorInputUsuario,
            Mensagem: this.state.valorInputMensagem
        }

        const newMensagem = [...this.state.mensagemUsuario, novaMensagem]

        this.setState({ mensagemUsuario: newMensagem })
        this.setState({ valorInputMensagem: "" })
    }

    onChangeInputUsuario = event => {
        this.setState({ valorInputUsuario: event.target.value })
    }

    onChangeInputMensagem = event => {
        this.setState({ valorInputMensagem: event.target.value })
    }

    render() {

        const listaDeMensagens = this.state.mensagemUsuario.map(elm => {
            return (
                <DivEscrita>
                    <Strong>{elm.Usuario}: </Strong> {elm.Mensagem}
                </DivEscrita>
            )
        })
        
    return(
       <DivPai>
            <DivInputs>
                <InputUsuario 
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputUsuario}
                placeholder={"Usuario"}
                />
                <InputMensagem
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                placeholder={"Mensagem"}
                />
                <Botao onClick={this.adicionaMensagemUsuario}>Enviar</Botao>
            </DivInputs>
            <DivCaixa>
                {listaDeMensagens}
            </DivCaixa>
       </DivPai>
    )

    }

}

export default Labezap;