import axios from "axios";

function App() {
  const quote = () => {
    axios.get("https://api.quotable.io/random").then(function (response) {
      // handle success
      console.log(response.data.content);
    });
  };

  quote();

  return (
    <div className="App">
      <div className="header">
        <p>Quote Machine</p>
      </div>
      <div className="quote-box">
        <p className="quote-text">This is a quote</p>
      </div>
    </div>
  );
}

export default App;
