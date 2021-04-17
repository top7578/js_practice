//1. 백틱(``)을 사용하면 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
//2. innerHtml: , 해당 Element의 HTML, XML을 읽어오거나, 설정. div 안에 있는 내용 전체.
//   innerText: Element 내에서 사용자에게 '보여지는' 텍스트 값을 읽어옵니다.
//3. 없다면 //4 호출될 때 까지 00:00로 표시
//4. setInterval: 2번째 인자(1000:1초) 시간마다 1번째 인자 함수 호출
//5. 삼항 연산자: 10보다 작으면 해당 형식으로 출력


const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}` //1. //2. //5.
}

function init() {
  getTime() //3. 
  setInterval(getTime, 1000)  //4.
}

init()
