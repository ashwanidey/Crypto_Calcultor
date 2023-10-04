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




var pnlDiv = document.getElementById('pnl-toogle');
var targetPriceDiv = document.getElementById('target-price-toogle');
var liquidationPriceDiv = document.getElementById('liquidation-price-toogle');
var maxOpenDiv = document.getElementById('max-open-toogle');
var openPriceDiv = document.getElementById('open-price-toogle');

document.getElementById('pnl-tag').addEventListener('click', function() {
    if (pnlDiv.style.display === 'none' || pnlDiv.style.display === '') {
        pnlDiv.style.display = 'flex';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('target-price-tag').addEventListener('click', function() {
    if (targetPriceDiv.style.display === 'none' || targetPriceDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'flex';
    } 
  });

  document.getElementById('liquidation-price-tag').addEventListener('click', function() {
    if (liquidationPriceDiv.style.display === 'none' || liquidationPriceDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'flex';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('max-open-tag').addEventListener('click', function() {
    if (maxOpenDiv.style.display === 'none' || maxOpenDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'flex'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('open-price-tag').addEventListener('click', function() {
    if (openPriceDiv.style.display === 'none' || openPriceDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'flex'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('pnl-tag1').addEventListener('click', function() {
    if (pnlDiv.style.display === 'none' || pnlDiv.style.display === '') {
        pnlDiv.style.display = 'flex';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('target-price-tag1').addEventListener('click', function() {
    if (targetPriceDiv.style.display === 'none' || targetPriceDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'flex';
    } 
  });

  document.getElementById('liquidation-price-tag1').addEventListener('click', function() {
    if (liquidationPriceDiv.style.display === 'none' || liquidationPriceDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'flex';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('max-open-tag1').addEventListener('click', function() {
    if (maxOpenDiv.style.display === 'none' || maxOpenDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'flex'
        openPriceDiv.style.display = 'none'
        targetPriceDiv.style.display = 'none';
    } 
});

document.getElementById('open-price-tag1').addEventListener('click', function() {
    if (openPriceDiv.style.display === 'none' || openPriceDiv.style.display === '') {
        pnlDiv.style.display = 'none';
        liquidationPriceDiv.style.display = 'none';
        maxOpenDiv.style.display = 'none'
        openPriceDiv.style.display = 'flex'
        targetPriceDiv.style.display = 'none';
    } 
});

  
  


