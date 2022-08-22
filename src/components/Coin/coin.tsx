import './coin.css';

type Props = {
  name: string,
  price: number,
  icon: string,
  symbol: string
}

export default function Coin({name, price, icon, symbol}: Props) {
  return(
    <div className='coin'>     
      <h1>Name: {name}</h1>
      <img src={icon} alt='icon' />
      <h3>Price: {price}</h3>
      <h3>Symbol:{symbol}</h3>
    </div>
  )
}