const todoList = [];

let itemCount = 0;
let Count = 1;

document.getElementById('add-item').addEventListener('click', () => {
  let body = document.getElementsByTagName("body")[0];
  let main = document.createElement("main");
  main.innerHTML = body.innerHTML
  main.style.filter = "blur(4px)";
  body.innerHTML = ``;
  body.append(main);
  let div = document.createElement("div")
  div.className = "new"
  div.innerHTML =
    `<div id="popUp">
<p id="pop-Up-Para">Add New List</p>
<input type="text" placeholder="Add list" id="new-list">
<button id="add-btn">ADD</button>
<button id="close-btn">Close</button>
</div>`
  div.style.display = "flex"
  div.style.justifyContent = "space-around"

  body.append(div);
  // making todo-list
  document.getElementById("add-btn").addEventListener('click', () => {
    main.style.filter = "none";
    let cardTitle = document.getElementById("new-list").value
    const tempObj = {
      id: Date.now(),
      taskName: cardTitle
    }
    console.log(tempObj);
    todoList.push(tempObj);
    console.log(todoList);

    document.getElementById("para-position").style.visibility = "hidden"
    let container = document.getElementById("container")
    container.innerHTML += `  <div id="todoContainer">
    <div id="todo">
      <p style="text-align: center; color: black;" id="cardTitle">${cardTitle}</p>
      <hr>


      <div id="button-flex">
        <i class="fa-solid fa-circle-plus" id="add-item"></i>
        <i class="fa-solid fa-trash" id="delete-btn"></i>
      </div>
    </div>
    `
    // document.getElementById('popUp').style.display = "none"
  })
  // close pop-up
  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('popUp').style.display = "none"
  })
})
