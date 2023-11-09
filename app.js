//? Q1

function showAlert() {
  alert("Hello");
}

//todo  Q2

function purchasingPhone() {
    alert("Thans for purchasing Phone");
}


//todo Q3


function Deletea(){
  let a =  document.getElementById('tr1')
  a.innerHTML = '';
}
function Deleteb(){
  let b =  document.getElementById('tr2')
  b.innerHTML = "";

}
function Deletec(){
  let c =  document.getElementById('tr3')
  c.innerHTML = "";

}
function Deleted(){
  let d =  document.getElementById('tr4')
  d.innerHTML = "";

}
function DeleteE(){
  let d =  document.getElementById('tr5')
  d.innerHTML = "";

}
function DeleteF(){
  let d =  document.getElementById('tr6')
  d.innerHTML = "";

}
function DeleteG(){
  let g =  document.getElementById('tr7')
  g.innerHTML = "";

}



//todo Q5

let counterValue = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
  counterElement.textContent = counterValue;
}

function increaseCounter() {
  counterValue++;
  updateCounter();
}

function decreaseCounter() {
  counterValue--;
  updateCounter();
}