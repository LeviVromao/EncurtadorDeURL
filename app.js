const inputSubmit = document.querySelector("#submit")
    function sendURL(){
    const inputText = document.querySelector('#text').value
    let linkrequest = {
    destination: inputText,
    domain: { fullName: "rebrand.ly" }
    }

    let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "f07d3dad41fb4023b145db0334092594",
    }

    fetch("https://api.rebrandly.com/v1/links",{
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(linkrequest)
      })
      .then(response => response.json())
      .then(data =>{ 
      const inputText = document.querySelector('#text')
      inputText.value = data.shortUrl
    })
      
   
}

inputSubmit.addEventListener('click',sendURL)