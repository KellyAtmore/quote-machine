import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
  );
  const [author, setAuthor] = useState("Nelson Mandela");

  const copy = (quote, author) => {
    navigator.clipboard.writeText(quote + author);
  };

  const changeQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const data = res.data.content;
        const author = res.data.author;
        console.log("this is data", data, author);

        setQuote(data);
        setAuthor(author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Quote Machine</h1>
      </div>
      <div className="quote-box">
        <div className="copy-box">
          <a
            onClick={() => {
              copy(quote, author);
            }}
          >
            <i className="fa-regular fa-copy"></i>
          </a>
        </div>

        <p className="quote-text"> " {quote} " </p>
        <p className="author">{author}</p>
        <div className="btn-container">
          <button onClick={() => changeQuote()}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
