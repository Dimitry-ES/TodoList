var todos = ["Apprendre Laravel", "Faire le ménage"];
var container = document.querySelector('#todosContainer');
var renderTodo = function (str) {
    var x = document.createElement('p');
    x.classList.add('w-full', 'bg-slate-600', 'w-full', 'p-1', 'font-semibold');
    x.textContent = str;
    return x;
};
(function () {
    todos.forEach(function (e) {
        container.append(renderTodo(e));
    });
})();
