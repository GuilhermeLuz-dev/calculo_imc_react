import { useState } from "react";

const Result = ({ imc }) => {

    const [classificacoes, setClassificacoes] = useState([]);


    const renderClassificacao = () => {
        if (!imc) return 'Insira seu peso e altura';
        if (imc < 18.5) return 'Baixo peso!';
        if (imc < 24.9) return 'Peso adequado!';
        if (imc < 29.9) return 'Sobrepeso!';
        if (imc < 34.9) return 'Obesidade grau 1!';
        if (imc < 39.9) return 'Obesidade grau 2!';
        else return 'Obesidade extrema!';
    }
    return (
        <>
            <h2>Seu imc é: {imc}</h2>
            <h1>{renderClassificacao()}</h1>
        </>
    )
}

export default Result;