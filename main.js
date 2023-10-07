var sp = document.getElementById('sellingPrice');
var bp = document.getElementById('buyingPrice');

var amt = document.getElementById('amount');
var calButton = document.getElementById('add-button');
var profit = document.getElementById('pnl');
var margin = document.getElementById('margin');
var roe = document.getElementById('roe');
var quantityOfcoin = document.getElementById('quantity');
var lev;





// Slider
const container = document.querySelectorAll(".range-slider");
const slider = document.querySelector(".slider");
const thumb = document.querySelector(".slider-thumb");
const tooltip = document.querySelector(".tooltip");
const progress = document.querySelector(".progress");
  

function customSlider(){
    const maxVal = slider.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";

    tooltip.innerHTML = slider.value;
    progress.style.width = val;
    thumb.style.left = val;
    lev = slider.value;
}

customSlider();


slider.addEventListener("input",()=>{
    customSlider();
})


// Position Button
var long = document.getElementById('long-button');
long.addEventListener('click', function () {
    long.style.backgroundColor = 'green';
    long.style.color = 'white';
    short.style.backgroundColor = 'white';
    short.style.color = '#3B3B3B';

    
  });

  var short = document.getElementById('short-button');
  short.addEventListener('click', function () {
    short.style.backgroundColor = 'red';
    short.style.color = 'white';
    long.style.backgroundColor = 'white';
    long.style.color = '#3B3B3B';
});


function calculateQuantity(){
    console.log(lev);
    var quantity = (amt.value* lev)/bp.value;
    if(Number.isFinite(quantity)){
        quantityOfcoin.value= quantity.toFixed(2); 
        return quantity;
    }else{
        quantityOfcoin.value = 0;
    }
    
  
}
function calculateProfit(){
    var quantity = (amt.value* lev)/bp.value;
    if(short.style.backgroundColor === 'red'){
        var p = (bp.value- sp.value) * quantity.toFixed(2);
        if(Number.isFinite(p)){
            profit.value = p.toFixed(2); 
            return p;
        }else{
            profit.value = "0.00";
        }
        
    }
    else {
        var p = (sp.value - bp.value) * quantity.toFixed(2);
        if(Number.isFinite(p)){
            profit.value = p.toFixed(2); 
            return p;
        }else{
            profit.value = "0.00";
        }
        
    }
}

function calculateMargin(){
    var quantity = (amt.value* lev)/bp.value;
    const totalValueOfTrade = bp.value * quantity.toFixed(2);
    const initialMargin = totalValueOfTrade / lev;
    if(!Number.isNaN(initialMargin)){
        margin.value = initialMargin.toFixed(2);
        return initialMargin;
    }else{
        margin.value = "-";
    }
}

function calculateRoe(){
    var ROE = calculateProfit()/calculateMargin() *100;
    if(!Number.isNaN(ROE)){
        roe.value = ROE.toFixed(1);
    }
    else{
        roe.value = "-";
    }
    
}

sp.addEventListener('input', validateInputs);
bp.addEventListener('input', validateInputs);
amt.addEventListener('input', validateInputs);

function validateInputs() {
    // Check if both input fields have a value
    const isInput1Filled = bp.value.trim() !== '';
    const isInput2Filled = sp.value.trim() !== '';
    const isInput3Filled = amt.value.trim() !== '';

    // Enable/disable the submit button based on the conditions
    if(isInput1Filled && isInput2Filled && isInput3Filled){
        calButton.addEventListener("click", calculateProfit);
        calButton.addEventListener("click", calculateMargin);
        calButton.addEventListener("click", calculateQuantity);
        calButton.addEventListener("click", calculateRoe);
    }
    
}


function isNumberKey(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
    }
    return true;
}





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




