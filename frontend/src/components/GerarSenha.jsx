import { useState } from 'react'

function GerarSenha() {
    const [senha, setSenha] = useState('')

    async function gerarSenha() {
        const resposta = await fetch('http://127.0.0.1:8000/api/senhas/criar', {
            method: 'POST'
        })

        const dados = await resposta.json()
        setSenha(dados.senha)
        console.log(dados)
    }

    return (
        <div>
            <button onClick={gerarSenha}>Retirar senha</button>
            <p>{senha}</p>
        </div>
    )
}

export default GerarSenha

