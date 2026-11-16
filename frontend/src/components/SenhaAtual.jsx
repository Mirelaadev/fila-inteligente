function SenhaAtual(props) {
    return (
        <div className="senha-atual">
            <h2>Senha atual</h2>
            <p>{props.senha}</p>
        </div>
    )
}

export default SenhaAtual