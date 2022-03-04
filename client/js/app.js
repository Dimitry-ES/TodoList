const todos = ["Apprendre Laravel", "Faire le ménage"]
const container = document.querySelector('#todosContainer')
const renderTodo = (str) => {
    let x = document.createElement('p')
    x.classList.add('w-full', 'bg-slate-600', 'w-full', 'p-1', 'font-semibold')
    x.textContent = str
    return x
}

(() => {
    todos.forEach(e => {
        container.append(renderTodo(e))
    })
})()