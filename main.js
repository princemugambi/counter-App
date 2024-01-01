
const arr = [];
let sum1 = 0;

let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let totalSum = document.getElementById("sum");

let count = 0;


function incrementNum(){

	count += 1;
	
	countEl.textContent = count;

}



function saveCount(){
	arr.push(count);
      saveEl.textContent += count + "-";

      saveEl.style.color = "red";


      countEl.textContent = 0;

       count = 0;

}

function getSum(){

	for(let i = 0; i < arr.length; i += 1){
		sum1 += arr[i];
        // totalSum.textContent += arr[i];
	}
	totalSum.textContent = sum1;
}