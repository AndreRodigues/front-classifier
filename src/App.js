import './App.css';
import api from './services/api';
import Brasil from './imgs/bra.jpg'
import Portugal from './imgs/port.jpg'
import { useEffect, useState } from 'react';

function App() {

  const [classificate, setClassificate] = useState('');
  const [sentence, setSentence] = useState('')

  const classificateSentence = async (e) => {
    e.preventDefault();
    await api.post('/', {
      text: sentence
    }).then((res) => {
      setClassificate(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getFlag = (value) => {
    if (value === 'PTBR') {
      return  <img src={Brasil} width='300' alt='300'/>
    }

    return  <img src={Portugal} width='300' alt='300'/>
  }
  
  return (
    <div className="App">
      <form>
        <label>Frase: </label>
        <input type="text" name="sentenceText" onChange={e => setSentence(e.target.value)} /><br /><br />

        <button type="submit" onClick={(e) => classificateSentence(e)}>Classificar</button>
      </form>

      <h2>
        {classificate?.message ? getFlag(classificate.message) : 'Digite Uma frase para ser classificada'}
      </h2>
    </div>
  );
}

export default App;


/*
import './App.css';
import api from './services/api';
import { useEffect, useState } from 'react';

function App() {

  const [classificate, setClassificate] = useState('');
  const [sentence, setSentence] = useState('')

  useEffect(() => {
    api.post('/', {
      text: sentence
    }).then((res) => {
      setClassificate(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [sentence]);


  return (
    <div className="App">
      <form>
        <label>Sentença: </label>
        <input type="text" name="sentenceText" onClick={e => setSentence(e.target.value)} /><br /><br />
      </form>
      
      <div>
        {
          classificate?.message ? classificate.message : 'Neutro'
        }
      </div>
     
    </div>
  );
}

export default App;

*/