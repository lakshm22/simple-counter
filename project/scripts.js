const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const myNum = document.getElementById("myNum");

let count = 0;

decBtn.onclick = function(){
    count--;
    myNum.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    myNum.textContent = count;
}

incBtn.onclick = function(){
    count++;
    myNum.textContent = count;
}
