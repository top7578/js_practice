//1. localStorage에는 js data 저장 불가 (string 형태로만 저장), JSON.stringify를 통해서 js object를 string으로 변환
//2. string에서 js object로 변환
//3. array에 담겨 있는 것들 각각에 한번씩 함수를 실행
//4. filter은 array에 담겨 잇는 것들 참인 것 return 해서 새로운 array 반환
//5. parseInt: string -> int

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS ='toDos';

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {  //4
    return toDo.id !== parseInt(li.id); //5
  });
  toDos = cleanToDos
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //1
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "X";  
  delBtn.addEventListener("click", deleteToDo)
  span.innerText = text;
  li.appendChild(delBtn)
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj)
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //2
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    }); //3
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();