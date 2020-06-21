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
color: #FFFFFF;
`
const DivEscrita = styled.div `
        background-color: ${props => {
            if(props.user === "eu") {
                return 'yellow'
            } else {
                return '#488FFA'
            }
        }};
        border-radius: 10px;
        min-width: 100px;
        max-width: 400px;
        margin: 5px 5px 5px 10px;
        padding: 10px;
        display: flex;
`
const Input = styled.input `
padding: ${props => props.padding};
width: ${props => props.width};
outline: ${props => props.outline};
border: ${props => props.border};
border-bottom: 4px solid #488FFA;
border-radius: 10px;
`
const Botao = styled.button `
background-color: #FABE50;
padding: 8px;
width: 100px;
outline: none;
border: none;
border-bottom: 4px solid #488FFA;
border-radius: 10px;
`
const DivPai = styled.div `
background-color: #6BACFF;
display: flex;
flex-direction: column-reverse;
align-items: center;
`
const DivCaixa = styled.div `
margin-top: 2vh;
min-height: 83vh;
background-color: #FFF;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 50vw;
border-radius: 10px;
`

let numero = 0

class Labezap extends React.Component {
    state = {
       mensagemUsuario: [
        ],

        valorInputUsuario: "",
        valorInputMensagem: "",
    }

    adicionaMensagemUsuario = () => {
        const novaMensagem = {
            id: numero++,
            Usuario: this.state.valorInputUsuario,
            Mensagem: this.state.valorInputMensagem
        }

        const newMensagem = [...this.state.mensagemUsuario, novaMensagem]

        this.setState({ mensagemUsuario: newMensagem })
        this.setState({ valorInputMensagem: "" })
    }
    
    enviaEnter = (event) => {
        if(event.key === "Enter"){
            this.adicionaMensagemUsuario()
        }
    }

    alertDoubleClick = (idRemovido) => {
        let apagaMensagem = 0
        if(window.confirm(`Deseja realmente apagar esta mensagem?`)) {
            apagaMensagem = this.state.mensagemUsuario.filter((elm, idx, arr) => {
                return elm.id !== idRemovido
            })
        }else{
            return this.state.mensagemUsuario
        }
         this.setState({mensagemUsuario: apagaMensagem})
    }

    
    onChangeInputUsuario = event => {
        this.setState({ valorInputUsuario: event.target.value })
    }

    onChangeInputMensagem = event => {
        this.setState({ valorInputMensagem: event.target.value })
    }

    render() {

         const listaDeMensagens = this.state.mensagemUsuario.map(elm => {
            if(elm.Usuario === "eu"){
                return (
                    <DivEscrita user= "eu" key={elm.id} onDoubleClick={()=>this.alertDoubleClick(elm.id)}>
                        {elm.Mensagem}
                    </DivEscrita>
                )
            }else{
                return (
                    <DivEscrita user= "outro" key={elm.id} onDoubleClick={()=>this.alertDoubleClick(elm.id)}>
                        <Strong>{elm.Usuario}: </Strong> {elm.Mensagem}
                    </DivEscrita>
                )
            }
        })
        
    return(
       <DivPai>
            <DivInputs>
                <Input padding={"8px"} width={"100px"} outline={"none"} border={"none"}
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder={"Usuario"}
                    onKeyPress={this.enviaEnter}
                />
                <Input padding={"8px"} width={"400px"} outline={"none"} border={"none"}
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                    onKeyPress={this.enviaEnter}
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