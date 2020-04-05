var newTask;
var bindCompleteItems;
newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');
var toDoUl = document.querySelector(".todo-list ul");
var completeUl = document.querySelector(".complete-list ul");
var createNewTask = function (task) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    label.innerText = task;
    checkBox.type = "checkbox";
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
};
var addTask = function () {
    var newTaskid = newTask.value;
    var listItem = createNewTask(newTaskid);
    toDoUl.appendChild(listItem);
    newTask.value = "";
    bindIncompleteItems(listItem, completeTask);
};
var completeTask = function () {
    var listItem = this.parentNode;
    var checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem);
};
var bindIncompleteItems = function (taskItem, checkBoxClick) {
    var checkBox = taskItem.querySelector("input[type=checkbox]");
    var c;
    c = checkBox;
    c.oninput = checkBoxClick;
};
for (var i = 0; i < toDoUl.children.length; i++) {
    bindIncompleteItems(toDoUl.children[i], completeTask);
}
addTaskBtn.addEventListener("click", addTask);
//# sourceMappingURL=main.js.map