// d3 STACKS
//console.log("%c D3 data convert csv->json: ", "border:outset 3px silver;color:black; background-color:silver");

document.getElementById("dataConvert").innerHTML = ` 
 <p>Source: 07-04-2019, https://www.CryptoDataDownload.com</p>
<div class="dataConvert">
</div>  
`;
    function render(data){
        d3.select(".dataConvert")
          .append("pre")
          .text(JSON.stringify(data, null, 2));
      }
      function type(d){
        d.Date = +d.Date;
        d.Symbol  = +d.Symbol;
        d.Open = +d.Open;
        d.Close  = +d.Close;
        d.High  = +d.High;
        d.Low  = +d.Low;
        return d;
      }
      d3.csv("data/Coinbase_BTCUSD_2019.csv", type, render);