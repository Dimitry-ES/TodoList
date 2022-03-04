const todos: string[] = ["Apprendre Laravel", "Faire le ménage"]
const container: any = document.querySelector('#todosContainer')
const renderTodo: Function = (str) => {
    let x: any = document.createElement('p')
    x.classList.add('w-full', 'bg-slate-600', 'w-full', 'p-1', 'font-semibold')
    x.textContent = str
    return x
}

(() => {
    todos.forEach(e => {
        container.append(renderTodo(e))
    })
})()