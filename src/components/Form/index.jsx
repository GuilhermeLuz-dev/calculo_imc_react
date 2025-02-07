import style from './form.module.css';
const Form = ({ calcularImc, getPeso, getAltura, peso, altura }) => {
    return (
        <form className={style.form}>
            <h1>Calcule seu Índice de Massa Corporal (IMC)</h1>
            <div className={style.formInputs}>
                <div>
                    <label>Peso:(Kg)</label>
                    <input className={style.formInput} value={peso} type="text" id="peso" onChange={e => getPeso(e.target.value)} placeholder='Peso em Kg: 70' />
                </div>
                <div>
                    <label>Altura:(cm)</label>
                    <input className={style.formInput} value={altura} type="text" id="altura" onChange={e => getAltura(e.target.value)} placeholder='Altura em Cm: 180' />
                </div>
            </div>
            <button className={style.formButton} type="submit" onClick={calcularImc}>Calcular IMC</button>
        </form >
    )
}

export default Form;