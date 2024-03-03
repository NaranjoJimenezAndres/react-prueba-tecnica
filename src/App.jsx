import { useState, useEffect } from 'react'
import './App.css'
import { getRamdomFact } from './services/facts';

const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_ENDPOINT_RAMDOM_FACT = `https://catfact.ninja/fact`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/';

function App() {
  const [fact, setFact] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');

  useEffect(() => {
    getRamdomFact().then((fact) => setFact(fact));
  }, [])


  useEffect(() => {
    if (!fact) return;
    
    const threeFirstWord = fact.split(' ', 3).join(' ');
    console.log(threeFirstWord);

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then((response) => response.json())
      .then(data => {
        const { url } = data;
          setImageUrl(url)
        })
      }, [fact])

  const handleGetNewFact = async () => {
    const newFact = await getRamdomFact();
    setFact(newFact);
  }


  return (
    <main style={{ display : 'flex' , flexDirection: 'column', justifyContent : 'center'}}>
      <h1>APP de gatitos</h1>

      <button onClick={handleGetNewFact}>Get New Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="Image extacted" />}
    </main>
  )
}

export default App
