
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
    root.appendChild(vertical);
    var a = root.lastChild;
    a.classList.add("vertical");
    a.setAttribute("id", cont);
    var b = a.firstChild;
    b.classList.add("nome");
    b.lastChild.classList.add("fas");
    b.lastChild.classList.add("fa-sort-down");
}
const g = document.querySelectorAll(".vertical");

g.forEach(element => {
        const list = document.getElementById(element.id);
        var ul = document.createElement("ul");
        Object.keys(people[0]).forEach(function(a){
                var li = document.createElement("li");
                var text = document.createTextNode(a + ": " + people[element.id][a]);
                li.appendChild(text);
                ul.appendChild(li);
            
        });
        list.appendChild(ul);
        element.lastChild.classList.add("hide");
    
    element.addEventListener("click", function(){
        list.lastChild.classList.toggle("hide");
        list.lastChild.classList.toggle("desc");
    })
});

    

