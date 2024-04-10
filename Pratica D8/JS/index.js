const handleSubmit = function (e) {
    e.preventDefault()
    addTask()
    attachComplete()
    attachDelete()
}

const addTask = function() {
    let tasks = document.querySelector('#tasks')
    let inputField = document.querySelector('#nuovaTask input')
    let nuovaTask = `
        <div class='task'>
            <span id='nometask'>
                ${inputField.value}
            <span/>
            <button class='delete'>
                <i class='far fa-trash-alt'></i>
            <button/>
        </div>          
    `
    tasks.innerHTML += nuovaTask
    inputField.value = ''
}

const attachComplete = function () {
    let allTasks = document.querySelectorAll('.task')
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].addEventListener('click', function () {
            this.classList.toggle('completed')
        })
    }
}

const attachDelete = function () {
    let allButtonD = document.querySelectorAll('.delete')
    for (let i = 0; i < allButtonD.length; i++) {
        allButtonD[i].addEventListener('click', function() {
            this.Node.remove()
        })
    }
}

window.onload = function() {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}