import { useEffect, useState } from 'react'
import SenhaAtual from '../components/SenhaAtual.jsx'
import SenhasChamadas from "../components/SenhasChamadas.jsx";

function Painel() {
    const [senha, setSenha] = useState('')
    useEffect(() => {
        async function buscarSenhaAtual() {
            const resposta = await fetch('http://127.0.0.1:8000/api/senhas/atual')
            const dados = await resposta.json()

            setSenha(dados.senha)
        }

        buscarSenhaAtual()

    }, [])
    return (
        <div className="painel">
            <header className="cabecalho-painel">
                <h1>Painel de Atendimento</h1>
            </header>

            <main className="conteudo-painel">
                <SenhaAtual senha={senha} />
            </main>

            <div className="chamadas-painel">
                <h2>Senhas chamadas</h2>
                 <SenhasChamadas/>
            </div>
        </div>
        )
}

export default Painel