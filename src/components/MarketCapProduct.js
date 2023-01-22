
function MarketCapProduct() {
  
    var currentPrice = document.getElementById('currentPrice').value;
    var circulatingSupply = document.getElementById('circulatingSupply').value;
    var result = document.getElementById('result');
    var marketCap = currentPrice * circulatingSupply;
    result.value = marketCap;

}

export default MarketCapProduct
