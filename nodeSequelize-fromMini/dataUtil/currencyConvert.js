(currencyConvert = function() {
    
document.getElementById('#currencyHtml').innerHTML = currencyHtml;
    
const currencyHtml = `  
<script src="https://unpkg.com/mathjs@6.2.3/dist/math.min.js"></script>
  <style>
     input {
      font-size: 11pt;  font-family: verdana, arial, sans-serif;
      color: #4d4d4d;   max-width: 600px; 
      padding: 5px;  width: 400px;
    }
    button {
      padding: 5px;
    }
  </style> 

<h3>Currency conversion with math.js</h3>
<h4>Fetch currencies from <a href="https://fixer.io">fixer.io</a> using math.js calculations.</h4><hr>
<p>Create a (free) account at <a href="https://fixer.io">fixer.io</a> and enter fixer.io API access key below:</p>

<form id="fetchForm">
    <input type="text" id="apiKey" placeholder="fixer.io API access key..." />
    <button type="submit" id="ok">Fetch currencies</button>
</form>
<p id="info"></p>

<div id="form" style="display: none;">
  <p>
    <label for="expr">Enter an expression with currencies:</label>
  </p>
  <p>
    <input id="expr" value="5 EUR + 2 * 3 EUR in USD" /><br/>
  </p>
  <p id="result"></p>
</div>
`;
  const accessKey = document.getElementById('apiKey')
  const fetchForm = document.getElementById('fetchForm')

  fetchForm.onsubmit = function (event) {
    event.preventDefault()

    document.getElementById('info').innerHTML = 'Fetching currencies...'

    fetchAndImportCurrencies(accessKey.value)
      .then(function (currencies) {
        document.getElementById('expr').oninput = evaluate
        document.getElementById('form').style.display = ''
        document.getElementById('info').innerHTML = 'Available currencies: ' + currencies.join(', ')

        evaluate()
      })
      .catch(function (err) {
        console.error(err)
        document.getElementById('info').innerHTML = '<span style="color: red;">' + err.toString() + '</span>'
      })
  }

  function fetchAndImportCurrencies (accessKey) {
    // fetch actual currency conversion rates
    return fetch('https://data.fixer.io/api/latest?access_key=' + accessKey)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        if (data.success) {
          // import the currencies
          math.createUnit(data.base)
          Object.keys(data.rates)
            .filter(function (currency) {
              return currency !== data.base
            })
            .forEach(function (currency) {
              math.createUnit(currency, math.unit(1 / data.rates[currency], data.base))
            })

          // return an array with all available currencies
          return Object.keys(data.rates).concat(data.base)
        }
        else {
          throw new Error(data.error.info)
        }
      })
  }

  function evaluate () {
    const expr = document.getElementById('expr')
    const result = document.getElementById('result')

    try {
      const resultStr = math.format(math.evaluate(expr.value), {notation: 'fixed', precision: 2})
      result.innerHTML = '<span style="color: dodgerblue;">' + resultStr + '</span>'
    }
    catch (err) {
      result.innerHTML = '<span style="color: red;">' + err.toString() + '</span>'
    }
  }
})();