window.addEventListener("load", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  const loca = localStorage.getItem("todo-list")
    ? JSON.parse(localStorage.getItem("todo-list"))
    : [];

  if (localStorage.getItem("todo-list")) {
    loca.forEach((item) => renderTodoList(item));
  }

  function renderTodoList(value) {
    const todo = `
      <div class="todo-item">
        <span class="todo-text">${value}</span>
        <i class="fa fa-trash todo-remove" data-value="${value}"></i>
      </div>
    `;
    todoList.insertAdjacentHTML("afterbegin", todo);
  }

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const _this = e.target;
    const value = _this.elements["todo"].value.trim();

    if (value === "") {
      _this.elements["todo"].value = "";
      return;
    }
    renderTodoList(value);
    loca.push(value);
    localStorage.setItem("todo-list", JSON.stringify(loca));

    _this.elements["todo"].value = null;
  });

  todoList.addEventListener("click", removeTodoItem);
  function removeTodoItem(e) {
    const clicked = e.target;
    if (clicked.matches(".todo-remove")) {
      const todoItem = clicked.parentNode;
      const todoValue = todoItem.firstElementChild.textContent;
      todoItem.parentNode.removeChild(todoItem);

      const indexValue = loca.findIndex((item) => item === todoValue);

      console.log(indexValue);
      console.log(loca);

      loca.splice(indexValue, 1);
      localStorage.setItem("todo-list", JSON.stringify(loca));
    }
  }
});
