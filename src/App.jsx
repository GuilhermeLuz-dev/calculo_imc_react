import { useEffect, useState } from 'react';

import styles from './global.module.css';

import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState({});

  const calcularIMC = (e) => {
    e.preventDefault();

    if (peso > 0 && altura > 0) {
      const alturaMetros = altura / 100;
      const result = ((peso / (alturaMetros * alturaMetros))).toFixed(2);
      setImc(parseFloat(result));
      setPeso('');
      setAltura('');
    } else {
      setClassificacao({ desc: "Por favor, insira seu peso e altura!", estado: "perigo" });
    }
  }

  useEffect(() => {

    if (!imc) {
      setClassificacao({ desc: 'Insira seu peso e altura', estado: 'ok' })
    } else if (imc < 18.5) {
      setClassificacao({ desc: 'Baixo peso!', estado: 'atencao' })
    } else if (imc < 24.9) {
      setClassificacao({ desc: 'Peso adequado!', estado: 'ok' })
    } else if (imc < 29.9) {
      setClassificacao({ desc: 'Sobrepeso!', estado: 'atencao' })
    } else if (imc < 34.9) {
      setClassificacao({ desc: 'Obesidade grau 1!', estado: 'alerta' })
    } else if (imc < 39.9) {
      setClassificacao({ desc: 'Obesidade grau 2!', estado: 'alerta' })
    } else {
      setClassificacao({ desc: 'Obesidade extrema!', estado: 'perigo' });
    }
  }, [imc]);


  return (
    <div className={styles.container}>
      <Form getPeso={setPeso} getAltura={setAltura} calcularImc={calcularIMC} peso={peso} altura={altura} />
      <Result imc={imc} getClassificacao={classificacao} />
    </div>
  )
}

export default App
