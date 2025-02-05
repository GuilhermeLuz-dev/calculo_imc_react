import style from './form.module.css';
const Form = ({ calcularImc, getPeso, getAltura, peso, altura }) => {
    return (
        < form>
            <label>Peso:</label>
            <input value={peso} type="text" id="peso" onChange={e => getPeso(e.target.value)} />
            <label>Altura:</label>
            <input value={altura} type="text" id="altura" onChange={e => getAltura(e.target.value)} />
            <button type="submit" onClick={calcularImc}>Calcular IMC</button>
        </form >
    )
}

export default Form;