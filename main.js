var sp = document.getElementById('sellingPrice');
var bp = document.getElementById('buyingPrice');
var lev = document.getElementById('leverage');
var amt = document.getElementById('amount');
var calButton = document.getElementById('add-button');
var profit = document.getElementById('profit');

function calculateProfit(){
    var quantity = (amt.value* lev.value)/bp.value;
    
    profit.value =  (sp.value- bp.value) * quantity.toFixed(3);
    
}

calButton.addEventListener("click", calculateProfit);