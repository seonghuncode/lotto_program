const numbers = document.querySelector(".numbers");
const random = document.querySelector("#random");
const reset = document.querySelector("#reset");


lottoNum = [];
colors = ["yellow", "green", "blue", "red", "purple"];

function color(number){
    const num = document.createElement('div');
    let index = Math.floor(number/10);

    num.style.backgroundColor = colors[index];

    num.textContent = number;
    numbers.appendChild(num);
}



random.addEventListener('click', function(){

    while(lottoNum.length < 6){
        let ran = Math.floor (Math.random()*45) + 1;
        if(lottoNum.indexOf(ran) === -1){
            lottoNum.push(ran);
            color(ran);
        }
    }
})


reset.addEventListener('click', function(){
    lottoNum.splice(0,6);

    numbers.innerHTML = ""
    
})



