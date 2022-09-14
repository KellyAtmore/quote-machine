import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("this is intitial quote");

  const changeQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const data = res.data.content;
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <p>Quote Machine</p>
      </div>
      <div className="quote-box">
        <p className="quote-text">{quote}</p>
      </div>
      <button onClick={() => changeQuote()}>change quote</button>
    </div>
  );
}

export default App;
