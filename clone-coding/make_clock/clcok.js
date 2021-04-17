//1. 백틱(``)을 사용하면 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
//2. innerHtml: , 해당 Element의 HTML, XML을 읽어오거나, 설정. div 안에 있는 내용 전체.
//   innerText: Element 내에서 사용자에게 '보여지는' 텍스트 값을 읽어옵니다.

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}` //1. //2.
}

function init() {
  getTime()
}

init()
