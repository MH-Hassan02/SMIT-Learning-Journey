function addTask() {
    var taskInput = document.getElementById("taskInput")
    var taskList = document.getElementById("taskList")

    if (taskInput.value == "") {
        alert("Please enter a task")
    } else {
        var listItem = document.createElement("li")
        listItem.innerHTML = taskInput.value
        var deleteButton = document.createElement("button")
        deleteButton.className = "deleteBtn"
        deleteButton.innerHTML = "Delete"
        deleteButton.setAttribute("onclick", "removeTask(this)")
        listItem.appendChild(deleteButton)
        taskList.appendChild(listItem)
        taskInput.value = ""
    }

}

function removeTask(ele) {
    ele.parentNode.remove();
}
