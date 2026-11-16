import GerarSenha from "../components/GerarSenha.jsx";

function Usuario() {
    return (
        <div className="usuario">
            <div className="card">
                <h1>Bem-vindo ao atendimento</h1>
                <p>Para ser atendido, retire sua senha abaixo.</p>
                <GerarSenha/>
                <p>Aguarde sua senha ser chamada</p>
            </div>
        </div>
    )
}

export default Usuario