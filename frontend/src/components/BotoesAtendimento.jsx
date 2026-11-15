function BotoesAtendimento(props) {
   async function chamarProxima() {
      const resposta = await fetch('http://127.0.0.1:8000/api/senhas/chamar', {
          method: 'PUT'
      })

      const dados = await resposta.json()

      console.log(dados)
       props.setSenha(dados.senha)
  }
    return (
    <div>
      <button onClick={chamarProxima}>Chamar próxima</button>
      <button>Concluir atendimento</button>
    </div>
  )
}

export default BotoesAtendimento