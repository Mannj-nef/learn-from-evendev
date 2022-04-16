class Model {
  constructor() {
    this.todos = localStorage.getItem("todo-list")
      ? JSON.parse(localStorage.getItem("todo-list"))
      : [];
  }

  updateLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(this.todos));
  }

  renderTodoList(handler) {
    this.todos.forEach((item) => handler(item));
  }

  addTodoList(value) {
    if (value) {
      this.todos.push(value);
      this.updateLocalStorage();
    }
  }
  removeTodoList(iconRemove) {
    const value = iconRemove.previousElementSibling.textContent;
    const todoItem = iconRemove.parentNode;

    const index = this.todos.findIndex((item) => item === value);
    this.todos.splice(index, 1);
    todoItem.parentNode.removeChild(todoItem);
    this.updateLocalStorage();
  }
}

class View {
  constructor() {
    this.app = this.getElement("body");
    this.todo = this.createElement("div", "todo");
    this.form = this.createElement("form", "todo-form");
    this.form.autocomplete = "off";
    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.name = "todo";
    this.input.placeholder = "Enter your task";
    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.textContent = "Add";

    this.form.append(this.input, this.submit);

    this.todoList = this.createElement("div", "todo-list");

    this.todo.append(this.form, this.todoList);
    this.app.append(this.todo);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selecter) {
    const element = document.querySelector(selecter);
    return element;
  }

  get valueInput() {
    return this.input.value.trim();
  }

  _resetValueInput() {
    this.input.value = null;
  }

  displayTodo(value) {
    const todoItem = this.createElement("div", "todo-item");
    const span = this.createElement("span", "todo-text");
    span.textContent = value;
    const icon = this.createElement("i");
    icon.className = "fa fa-trash todo-remove";
    icon.dataset.value = value;

    todoItem.append(span, icon);
    this.todoList.append(todoItem);
  }

  viewAddTodo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.valueInput === "") {
        this._resetValueInput();
        return;
      }
      handler(this.valueInput);

      this._resetValueInput();
    });
  }
  viewRemoveTodo(handle) {
    this.todoList.addEventListener("click", (e) => {
      const clicked = e.target;
      if (clicked.matches(".todo-remove")) {
        handle(clicked);
      }
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.viewAddTodo(this.handlerAddTodo);
    this.view.viewRemoveTodo(this.handlerRemoveTodo);
    this.model.renderTodoList(this.handlerRenderTodo);
  }

  handlerRenderTodo = (value) => {
    this.view.displayTodo(value);
  };

  handlerAddTodo = (value) => {
    this.view.displayTodo(value);
    this.model.addTodoList(value);
  };

  handlerRemoveTodo = (value) => {
    this.model.removeTodoList(value);
  };
}

const app = new Controller(new Model(), new View());
