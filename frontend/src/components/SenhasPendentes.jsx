import { useState, useEffect } from "react";

function SenhasPendentes(props) {

    const [senhas, setSenhas] = useState([])

    useEffect(() => {
        async function buscarSenhas() {
            const resposta = await fetch('http://127.0.0.1:8000/api/senhas/pendentes',{
                    method: 'GET'
                }
            )

            const dados = await resposta.json()

            setSenhas(dados)
            console.log(dados)
        }

        buscarSenhas()

    }, [props.atualizar])

    return (
        <div className="lista-senhas">
            <p>Senhas pendentes</p>

            {senhas.map((senha) =>(
                <p className="item-senha">{senha.senha}</p>
            ))}
        </div>
    )
}

export default SenhasPendentes
