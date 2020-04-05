let newTask:any;
let bindCompleteItems: (listItem: any) =>
{}
 newTask = document.querySelector('#new-task');
const addTaskBtn = document.querySelector('#addTask');
const toDoUl = document.querySelector(".todo-list ul");
const completeUl =  document.querySelector(".complete-list ul");
const createNewTask =(task: any)=>{
  let listItem = document.createElement("li"); 
  let checkBox = document.createElement("input"); 
  let label = document.createElement("label"); 
  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;  
};
const addTask = ()=>{
    
    let newTaskid=newTask.value;
   const listItem = createNewTask(newTaskid);
  toDoUl.appendChild(listItem); 
  newTask.value="";
  bindIncompleteItems(listItem, completeTask);

};

let completeTask = function(){
  
  const listItem = this.parentNode;

   const checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  
  completeUl.appendChild(listItem); 
  bindCompleteItems(listItem);
};
let bindIncompleteItems = (taskItem: Element, checkBoxClick: { (): void; (): void; })=>{  

  let checkBox = taskItem.querySelector("input[type=checkbox]");
 let c :any;
 c=checkBox;
 c.oninput= checkBoxClick;  
}; 
for(let i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}
addTaskBtn.addEventListener("click", addTask);
