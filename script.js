let tasks = []

function addTask(){

    let task = "Task " + (tasks.length + 1)

    tasks.push(task)

    render()
}

function render(){

    let container = document.getElementById("task-container")

    container.innerHTML = ""

    tasks.forEach(t => {

        let div = document.createElement("div")

        div.innerText = t

        container.appendChild(div)

    })
}