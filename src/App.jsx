import { useEffect, useState } from 'react';

import styles from './global.module.css';

import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    if (peso > 0 && altura > 0) {
      const alturaMetros = altura / 100;
      const result = ((peso / (alturaMetros * alturaMetros))).toFixed(2);
      setImc(parseFloat(result));
      setPeso('');
      setAltura('');
    } else {
      alert("Valor inválido");
    }
  }

  useEffect(() => {
    console.log(imc);
  }, [imc]);

  return (
    <div className={styles.container}>
      <Form getPeso={setPeso} getAltura={setAltura} calcularImc={calcularIMC} peso={peso} altura={altura} />
      <Result imc={imc} />
    </div>
  )
}

export default App
