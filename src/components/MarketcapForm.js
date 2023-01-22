function MarketcapForm() {
  return (

    
    <table width='80%' border='0'>
        <tr>
          <th>Current Price</th>
          <th>Circulating Supply</th>
          <th>Marketcap</th>
        </tr>
        <tr>
          <td><input id='currentPrice' type='text' oninput='MarketCapProduct()'></input></td>
          <td><input id='circulatingSupply' type='text' oninput='MarketCapPro()'></input></td>
          <td><input id='result'></input></td>
        </tr>
        <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
    </table>
    
 
  )
}


/*function calculate() {
  var currentPrice = document.getElementById('currentPrice').value;
  var circulatingSupply = document.getElementById('circulatingSupply').value;
  var result = document.getElementById('result');
  var marketCap = currentPrice * circulatingSupply;
  result.value = marketCap;
}
*/

export default MarketcapForm







 

