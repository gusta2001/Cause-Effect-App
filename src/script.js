
const root = document.getElementById("root");

for (let cont = 0; cont < people.length; cont++) {
    var vertical = document.createElement("ul");
    var linome = document.createElement("li");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var span = document.createElement("span");
    var i = document.createElement("i");
    var nome = document.createTextNode(people[cont].nome);
    span.appendChild(nome);
    linome.appendChild(span);
    linome.appendChild(i);
    vertical.appendChild(linome);
    vertical.appendChild(li);
    root.appendChild(vertical);
    var a = root.lastChild;
    a.classList.add("vertical");
    var b = a.firstChild;
    b.classList.add("nome");
    b.setAttribute("id", cont);
    b.lastChild.classList.add("fas");
    b.lastChild.classList.add("fa-sort-down");

    people.forEach((item, _index, arr) => {
        console.log(item);
    });
}
