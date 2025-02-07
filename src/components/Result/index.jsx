import './result.css'

const Result = ({ imc, getClassificacao }) => {


    return (
        <div className={'result ' + getClassificacao.estado}>
            {imc !== null && (
                <h1 className='resultImc'>Seu imc é: {imc}</h1>
            )}
            <h2 className={getClassificacao.estado}>{getClassificacao.desc}</h2>
        </div>
    )
}

export default Result;