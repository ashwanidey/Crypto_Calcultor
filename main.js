var sp = document.getElementById('sellingPrice');
var bp = document.getElementById('buyingPrice');
var lev = document.getElementById('leverage');
var amt = document.getElementById('amount');
var calButton = document.getElementById('add-button');
var profit = document.getElementById('pnl');
var margin = document.getElementById('margin');
var roe = document.getElementById('roe');
var quantityOfcoin = document.getElementById('quantity');



function calculateQuantity(){
    var quantity = (amt.value* lev.value)/bp.value;
    quantityOfcoin.value = quantity.toFixed(3);
  
}
function calculateProfit(){
    var quantity = (amt.value* lev.value)/bp.value;
    p = (sp.value- bp.value) * quantity.toFixed(3);
    profit.value = p; 
    return p;
    
}

function calculateMargin(){
    var quantity = (amt.value* lev.value)/bp.value;
    const totalValueOfTrade = bp.value * quantity.toFixed(3);
    const initialMargin = totalValueOfTrade / lev.value;
    margin.value = initialMargin;
    return initialMargin;
}

function calculateRoe(){
    var ROE = calculateProfit()/calculateMargin() *100;
    roe.value = ROE.toFixed(1);
}


calButton.addEventListener("click", calculateProfit);
calButton.addEventListener("click", calculateMargin);
calButton.addEventListener("click", calculateQuantity);
calButton.addEventListener("click", calculateRoe);





