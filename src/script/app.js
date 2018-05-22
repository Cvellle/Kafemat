import '../assets/styles/main.scss';
import '../assets/images/coffee.jpg';
import '../assets/images/coff.png';
// import 'script/js/script.js;


const coins = document.querySelectorAll('.coin');
const mach = document.querySelector('.machine');
const budget = document.querySelector('.budget');
const card = document.querySelector('.card');
  
/* INSERT MONEY */

function insert (e) {
    e.stopPropagation();
    budget.innerHTML = (Number(budget.innerHTML) + Number(this.dataset.mon)).toFixed(2); 
    card.innerHTML = (Number(card.innerHTML) - Number(this.dataset.mon)).toFixed(2);
      if (Number(cost.innerHTML) <= Number(budget.innerHTML)){
    document.getElementById("myBtn").disabled = false;
   } 
    
	
// var inp8 = document.createElement("div");  
// cf.appendChild(inp8);
    
    //cf.style.transform="translateY(20px -20px)";
var pos = -30;
var id = setInterval(fall, 1000/10000);
function fall() {

    if (pos == 60) {
      clearInterval(id);
      cf.style.top = "-30%"; 

    } else {
      pos+=1; 
      cf.style.top = pos + '%'; 

    }
  }

    
 }

  coins.forEach(coin=>coin.addEventListener('click',insert));

const buy = document.querySelector('.buy');
  
function buying () {
    const budget = document.querySelector('.budget');
    if (Number(cost.innerHTML) <= Number(budget.innerHTML))
   {
      document.getElementById("myBtn").disabled = false;  

      budget.innerHTML = (Number(budget.innerHTML - cost.innerHTML)).toFixed(2);  
      cost.innerHTML = Number(0).toFixed(2);
   }
    priceNodes.length = 0;   
 }
  
  buy.addEventListener('click',buying);

 /* RESETS VALUES OF DISPLAYS, RETURNS MONEY TO CARD */ 
  
reset.onclick = function reset() {   
    cost.innerHTML = Number(0).toFixed(2);
    priceNodes.length = 0;
}

reset2.onclick = function reset2() {
    card.innerHTML = Number(Number(Number(card.innerHTML).toFixed(2)) + Number(Number(budget.innerHTML).toFixed(2))).toFixed(2);
    budget.innerHTML = Number(0).toFixed(2);
    
}
   
/* ARRANGE CHECKBOXES AND ADDS PRICES TO COUNT */

const form = document.querySelector(".lif");
const inputs = form.getElementsByTagName("input");
const priceNodes = []; 
const cost = document.querySelector('.cost');

add.onclick = function addprice () {   
    for (var i = 0, max = inputs.length; i < max; i += 1) {  
    if (inputs[i].type === "checkbox" && inputs[i].checked) {
      inputs[i].checked = !inputs[i].checked;
      priceNodes.push(inputs[i]);
        }
      }         
   
/* takes price values from data of objects and adds to count  */        
    const para = priceNodes
      .map(node => node.dataset.price)
      .map(priceCode => {
      const [din, par] = priceCode.split(',').map(parseFloat);
      return (din * 100) + par;
    })
      .reduce((total, thisPara) => total + thisPara);
    
      let ostatakPara = para;
      const din = Math.floor(ostatakPara / 100);
      ostatakPara = ostatakPara % 100; 
      cost.innerHTML = Number(din+"."+ostatakPara).toFixed(2);    
  
}


