const todoList = [];


document.getElementById('add-item').addEventListener('click', () => {
  let body = document.getElementsByTagName("body")[0];
  let main = document.createElement("main");
  main.innerHTML = body.innerHTML
  main.style.filter = "blur(4px)";
  body.innerHTML = ``;
  body.append(main);

  const popModal = document.getElementById("popUpModal")
  popModal.innerHTML = `<div id="popUp">
    <p id="pop-Up-Para">Add List</p>
    <input type="text" placeholder="Add list" id="new-list">
    <button id="add-btn">ADD</button>
    <button id="close-btn">Close</button>
  </div>
  `
  body.append(popModal)

  // making-todo-list
  document.getElementById("add-btn").addEventListener('click', () => {
    main.style.filter = "none";
    popModal.style.display = "none"
    document.getElementById("para-position").style.visibility = "hidden"

    var cardTitle = document.getElementById("new-list").value
    const tempObj = {
      id: Date.now(),
      taskName: cardTitle
    }
    console.log(tempObj);
    todoList.push(tempObj)
    console.log(todoList);

    const todo = document.getElementById("cardContainer")
    if (cardTitle == "") {
      alert("add card title")
    }
    else {
      todo.innerHTML += `
   
      <div id="todo">
        <p style="text-align: center; color: black;" id="cardTitle">${cardTitle}</p>
        <hr>
   
   
        <div id="button-flex">
          <i class="fa-solid fa-circle-plus" class="add-item"></i>
          <i class="fa-solid fa-trash" id="delete-btn"></i>
     
      </div>`
    }
  })
  // adding new items in todo-list
  document.getElementsByClassName("add-item").addEventListener('click', () => {
    console.log("clicked");
  })

  // delete todo-list




  // visibling plus Icon
  document.getElementById("add-item").addEventListener('click', () => {
    popModal.style.display = "block"
    popModal.style.position = "absolute"
    popModal.style.bottom = "250px"
    popModal.style.left = "1100px"

  })
  // pop-up close
  document.getElementById("close-btn").addEventListener('click', () => {
    popModal.style.display = "none"
    main.style.filter = "none";
  })





})
