import SenhaAtual from "../components/SenhaAtual.jsx";
import BotoesAtendimento from "../components/BotoesAtendimento.jsx";
import SenhasPendentes from "../components/SenhasPendentes.jsx";
import SenhasChamadas from "../components/SenhasChamadas.jsx";
import { useState } from 'react'

function Administracao() {
  const [senha, setSenha] = useState('')
  const [senhaSelecionada, setSenhaSelecionada] = useState('')
  const [atualizar, setAtualizar] = useState(false)

  return (
      <div className="admin">
          <header className="cabecalho-admin">
              <div>
                  <h1>Gestão de Atendimento</h1>
              </div>
          </header>

          <main className="painel-admin">
              <SenhaAtual senha={senha || senhaSelecionada}/>
              <BotoesAtendimento
                  setSenha={setSenha}
                  senhaSelecionada={senhaSelecionada}
                  setAtualizar={setAtualizar}
                  atualizar={atualizar}
                  setSenhaSelecionada={setSenhaSelecionada}
              />

              <div className="listas-senhas">
                    <SenhasPendentes  atualizar={atualizar}/>
                    <SenhasChamadas
                        setSenhaSelecionada={setSenhaSelecionada}
                        atualizar={atualizar}
                    />
              </div>


          </main>
      </div>
  )
}
export default Administracao