function BotoesAtendimento(props) {
   async function chamarProxima() {
      const resposta = await fetch('http://127.0.0.1:8000/api/senhas/chamar', {
          method: 'PUT'
      })

      const dados = await resposta.json()

      console.log(dados)
      props.setSenha(dados.senha)
       props.setSenhaSelecionada('')
      props.setAtualizar(!props.atualizar)
  }
  async function concluirAtendimento() {
       console.log('Senha selecionada:', props.senhaSelecionada)
       const resposta = await fetch('http://127.0.0.1:8000/api/senhas/concluir', {
           method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              senha: props.senhaSelecionada
          })
       })
      const dados = await resposta.json()

      console.log(dados)
      props.setSenha('')
      props.setSenhaSelecionada('')
      props.setAtualizar(!props.atualizar)
  }

    return (
    <div className="botoes-atendimento">
      <button onClick={chamarProxima}>Chamar próxima</button>
      <button onClick={concluirAtendimento}>Concluir atendimento</button>
    </div>
  )
}

export default BotoesAtendimento