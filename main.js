todoArr = [];
todoObj = {
  id: 0,
  title: "",
  date: "",
  isCheck: false,
};
let count = 0;
todoArr = JSON.parse(localStorage.getItem("todos")) || [];

function Add() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  if (title == "" || date == "") {
    alert("the Vale null");
  } else {
    todos.push({
      id: count,
      title: title,
      date: date,
      isCheck: false,
    });
    count++;
    localStorage.setItem("todos", JSON.stringify(todos));
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    // window.reload();
    window.location.href="./index.html"
  }
}

function getTodo() {
  const cont = document.getElementById("todos");
  document.getElementById("numbert").innerText = `number ${todoArr.length}`;

  console.log(todoArr);
  //   let stat = "";
  for (let i = 0; i < todoArr.length; i++) {
    // if (todoArr[i].isCheck == true) {
    //   stat = "cheked";
    // }
    cont.innerHTML += `
    
   
   
        <div class="box" id="box +${i}" >
        <label for="date1" id="date" style="margin-right: 65px;">${todoArr[i].date}</label>
        <label for="task1" id="title" style="margin-right: 40px;">${todoArr[i].title}</label>
        <button onclick="remove(${i})">Remove</button>
        <button onclick="done(${i})">Done</button>
    </div>
        `;
  }
}
getTodo();

function done(id) {
  todoArr[id].isCheck = !todoArr[id].isCheck;
  document.getElementById(`box +${id}`).classList.toggle("done");
  localStorage.setItem("todos", JSON.stringify(todoArr));
}
function remove(id) {
  console.log(id);
  todoArr.splice(id, 1);
  console.log(todoArr);
  localStorage.setItem("todos", JSON.stringify(todoArr));
  window.location.reload();
}
