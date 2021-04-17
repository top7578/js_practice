//1. class 추가
//2. 브라우저에 저장된 값 가져옴

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);    //1
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `HELLO ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS)   //2
  if(currentUser === null){

  } else {
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init()
