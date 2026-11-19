import { useState, useEffect } from "react";

function SenhasChamadas(props) {

    const [senhas, setSenhas] = useState([])

    useEffect(() => {
        async function buscarSenhas() {
            const resposta = await fetch(props.url)

            const dados = await resposta.json()

            setSenhas(dados)
            console.log(dados)
        }

        buscarSenhas()

    }, [props.atualizar])

    return (
        <div className="lista-senhas">
            {senhas.map((senha) =>(
                <p className="item-senha"
                   onClick={() => props.setSenhaSelecionada(senha.senha)}>
                    {senha.senha}
                </p>
            ))}
        </div>
    )
}

export default SenhasChamadas
