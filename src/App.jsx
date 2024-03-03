import './App.css'
import { useCatImage } from './services/hooks/useCatImage';
import { useCatFact } from './services/hooks/useCatFact';



function App() {
  const { fact, refreshRamdomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  
  const handleGetNewFact = async () => {
    refreshRamdomFact();
  }

  return (
    <main>
      <h1>APP de gatitos</h1>

      <button onClick={handleGetNewFact}>Get New Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={ imageUrl } alt="Image extacted" />}
    </main>
  )
}

export default App
