const numbers = document.querySelector(".numbers")
const doit = document.querySelector("#draw")
const reset = document.querySelector("#reset")



const lottoNumbers = [];
const colors = ["aqua", "purple", "blue", "yellow", "red"]

//추첨으로 나온 숫자를 영역 안에 나오게 하는 함수를 만들기
function paintNumber(number){
    
    const eachNumber = document.createElement('div') //div요소를 추가한다

    eachNumber.classList.add('eachnum'); //eachnum이라는 클래스를 만들어서 css에서 각각의 값을 적용하기 위해서 생성
    //div를 추가 했고 그div태그 안에는 각 숫자가 들어가고 각 div탸그에 eachnum이라는 것을 추가

    let colorIndex = Math.floor(number/10) //매개변수로 받은 number을 10으로 나눈 몫을 저장
    //추첨번호 1~45를 10으로 나누면 0.1 ~ 0.45 -> floor로 정수로 만들면 0 ~ 5로 변환 시켜주는 과정

    eachNumber.style.backgroundColor = colors[colorIndex] //각각의 div요소에 배경색ㅇ르 지정해준다.

    eachNumber.textContent = number //각각의 숫자에 매개변수로 받은 숫자를 대입한다.

    numbers.appendChild(eachNumber) // eachNumber를 numbers에 추가 한다,
}


doit.addEventListener('click', function(){
    while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random()*45) + 1
        if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
})



// 다시 버튼 클릭 이벤트 핸들링
reset.addEventListener('click', function(){
    lottoNumbers.splice(0, 6) // n1번 인덱스에서부터 n2개 지운다
  
    // innerHTML : 해당 DOM 안의 HTML 소스 코드
    numbers.innerHTML = ""   //보이는 결과 화면을 지우는 역할??
  })


