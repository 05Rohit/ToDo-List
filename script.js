let taskForm = document.querySelector("#task-form");
let taskElement = document.querySelector("#task-el");
let displayList = document.querySelector("#display-List");

let taskList = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")): [];

taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); //Stop The Automatic Form Submission and reloading
  let task = taskElement.value;
  if (task.length > 0) {
    taskList.unshift(task);
    console.log(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    taskElement.value = "";
  }

  display();
});

function display()
 {
    let append = "";
    for (let val in taskList) {
      append += `<ul class="list-group">
          <li class="border-bottom border-black d-flex justify-content-between pe-5 ps-5 mt-4">

            
          <span class="fw-bold">${taskList[val]}</span> 
           <button class=" btn btn-close remove-task" data-id='${val}' >
           </button> 
         
          </li>
       </ul>`;
    
    }
    document.querySelector("#display-List").innerHTML = append;
  
    let removeBtns = document.querySelectorAll(".remove-task");

    removeBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        let indexToRemove = event.target.getAttribute('data-id');
        console.log(indexToRemove)
        let b=taskList.splice(indexToRemove, 1); 
        console.log(b)
         localStorage.setItem("tasks", JSON.stringify(taskList));
        display();
      });
    });


  }
  
  display();




