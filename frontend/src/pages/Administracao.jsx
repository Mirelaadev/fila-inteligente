import SenhaAtual from "../components/SenhaAtual.jsx";
import BotoesAtendimento from "../components/BotoesAtendimento.jsx";
import { useState } from 'react'

function Administracao() {
  const [senha, setSenha] = useState('')
  return (
      <div>
        <h1>Fila Inteligente</h1>
        <p>Bem-vindo ao Sistema de Atendimento</p>

        <SenhaAtual senha={senha}/>

        <BotoesAtendimento setSenha={setSenha}/>
      </div>
  )
    
}
export default Administracao