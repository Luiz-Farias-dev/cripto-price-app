import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import { Icoin } from './types/coins';
import Coin from './components/Coin/coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState<Icoin | []>([]);
  const [coinFilter, setCoinFilter] = useState('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&')
    .then( response => {
      setListOfCoins(response.data.coins);
    })
  }, [])

  const filteredCoin = listOfCoins.filter(coin => {
    return coin.name.toLowerCase().includes(coinFilter.toLowerCase());
  })

  return (
    <div className="App">
      <div className='cryptoHeader'>
        <input type='text' placeholder='Digite aqui a criptomoeda' onChange={e => setCoinFilter(e.target.value)} />
      </div>
      <div className='cryptoDisplay'>
        {filteredCoin.map(coin => (
          <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
        ))}
      </div>
    </div>
  );
}

export default App;