import SenhaAtual from "./components/SenhaAtual.jsx";
import Botoes from "./components/BotoesAtendimento.jsx";

function App() {
  return (
      <div>
        <h1>Fila Inteligente</h1>
        <p>Bem-vindo ao Sistema de Atendimento</p>

        <SenhaAtual/>

        <Botoes/>
      </div>
  )
}

export default App