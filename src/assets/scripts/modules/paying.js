const coins = document.querySelectorAll('.coin');
const mach = document.querySelector('.machine');
const budget = document.querySelector('.budget');
const card = document.querySelector('.card');

const resetcost = document.querySelector('.resetcost');
const resetbudg = document.querySelector('.resetbudg');
const add = document.querySelector(".add");

add.addEventListener("click", addprice)
resetcost.addEventListener("click", reset);
resetbudg.addEventListener("click", reset2);

 /* RESETS VALUES OF DISPLAYS, RETURNS MONEY TO CARD */ 
  
 function reset() {   
    cost.innerHTML = Number(0).toFixed(2);
    priceNodes.length = 0;
}
function reset2() {
    card.innerHTML = Number(Number(Number(card.innerHTML).toFixed(2)) + Number(Number(budget.innerHTML).toFixed(2))).toFixed(2);
    budget.innerHTML = Number(0).toFixed(2);
    
}
   
const form = document.querySelector(".lif");
const inputs = form.getElementsByTagName("input");
const priceNodes = []; 
const cost = document.querySelector('.cost');

function addprice () {   
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