//1. class 추가
//2. 브라우저에 저장된 값 가져옴
//3. addEventListener 첫번째 인자 발생 대기
//4. submit event 입력되면 기본 이벤트 동작 방지

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();       //4
  const currentValue = input.value;
  paintGreeting(currentValue)
  saveName(currentValue)
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);  //3
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);    //1
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `HELLO ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS)   //2
  if(currentUser === null){
    askForName()
  } else {
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init()
