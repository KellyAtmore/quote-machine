

const getQuote = () => {
  axios.get("https://api.quotable.io/random")
  .then(function (response) {
    // handle success
    console.log(response.data.content);
    return response.json()
    
  });
  
};


export default function getQuote;