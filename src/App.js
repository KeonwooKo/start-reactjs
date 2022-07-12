import React, { useEffect, useState } from "react";
function App() {
  const [Loading, setLoading] = useState(true);
  const [Coins, setCoins] = useState([]);
  const [Amount, setAmount] = useState(0);
  const [CoinPrice, setCoinPrice] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const changeSelect = (event) => {
    setCoinPrice(event.target.value);
  };
  return (
    <div>
      <h1>The Coins ! {Loading ? "" : `(${Coins.length})`}</h1>
      {Loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={changeSelect}>
          <option>Select Coin !</option>
          {Coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <form>
        <label htmlFor="usd">USD : </label>
        <input
          id="usd"
          type="number"
          value={Amount}
          onChange={onChange}
          placeholder="USD you have?"
        ></input>
        <h3>You have {Amount / CoinPrice} </h3>
      </form>
      <div> </div>
    </div>
  );
}

export default App;
