const people =    [
	{
		"nome": "Martin Daniel Jesus",
		"idade": 49,
		"cpf": "758.082.022-64",
		"rg": "46.203.938-9",
		"data_nasc": "17\/12\/1971",
		"sexo": "Masculino",
		"signo": "Sagitário",
		"mae": "Brenda Lúcia Emanuelly",
		"pai": "Diego Felipe Jesus",
	},
	{
		"nome": "Jorge Gael Caio da Luz",
		"idade": 23,
		"cpf": "896.161.177-18",
		"rg": "22.573.775-9",
		"data_nasc": "04\/06\/1997",
		"sexo": "Masculino",
		"signo": "Gêmeos",
		"mae": "Stella Betina Luana",
		"pai": "Otávio Tomás da Luz",
	},
	{
		"nome": "Yasmin Mariah Silva",
		"idade": 47,
		"cpf": "206.337.530-50",
		"rg": "11.042.061-5",
		"data_nasc": "05\/07\/1973",
		"sexo": "Feminino",
		"signo": "Câncer",
		"mae": "Sara Elisa Fernanda",
		"pai": "Theo Vinicius Silva",
	},
	{
		"nome": "Luciana Elisa Raquel Costa",
		"idade": 59,
		"cpf": "267.666.152-30",
		"rg": "42.785.062-9",
		"data_nasc": "14\/05\/1961",
		"sexo": "Feminino",
		"signo": "Touro",
		"mae": "Betina Luzia Larissa",
		"pai": "Diego Mateus Costa",
	},
	{
		"nome": "Louise Tânia da Costa",
		"idade": 23,
		"cpf": "463.239.896-97",
		"rg": "26.847.044-3",
		"data_nasc": "23\/04\/1997",
		"sexo": "Feminino",
		"signo": "Touro",
		"mae": "Regina Juliana Tânia",
		"pai": "Levi Pedro Henrique da Costa",
	},
	{
		"nome": "Joaquim Francisco Filipe",
		"idade": 65,
		"cpf": "945.543.237-49",
		"rg": "26.735.920-2",
		"data_nasc": "10\/11\/1955",
		"sexo": "Masculino",
		"signo": "Escorpião",
		"mae": "Maya Vera",
		"pai": "Victor Levi Corte Real",
	},
	{
		"nome": "Milena Isabelle Drumond",
		"idade": 79,
		"cpf": "773.498.017-18",
		"rg": "32.337.156-5",
		"data_nasc": "05\/10\/1941",
		"sexo": "Feminino",
		"signo": "Libra",
		"mae": "Raquel Sueli Rosângela",
		"pai": "Cauã Diego Luís Drumond",
	},
	{
		"nome": "Pietra Betina Simone",
		"idade": 69,
		"cpf": "866.596.523-88",
		"rg": "50.272.709-3",
		"data_nasc": "17\/03\/1951",
		"sexo": "Feminino",
		"signo": "Peixes",
		"mae": "Adriana Sueli",
		"pai": "Theo Oliver Moreira",
	},
	{
		"nome": "Esther Natália Barbosa",
		"idade": 44,
		"cpf": "125.116.777-25",
		"rg": "46.300.578-8",
		"data_nasc": "11\/04\/1976",
		"sexo": "Feminino",
		"signo": "Áries",
		"mae": "Silvana Marina Isadora",
		"pai": "Breno Carlos Ryan Barbosa",
	},
	{
		"nome": "Melissa Bruna da Costa",
		"idade": 59,
		"cpf": "125.822.213-25",
		"rg": "42.232.964-2",
		"data_nasc": "12\/06\/1961",
		"sexo": "Feminino",
		"signo": "Gêmeos",
		"mae": "Tereza Maya Sueli",
		"pai": "Diego Joaquim da Costa",
		}  
];

let render =    [
	{},{},{},{},{},{},{},{},{},{}  
];

let i = 0;

createItem();
createClick();

function createItem(){
    const root = document.getElementById("root");
    people.forEach((nome,key ) => {
        let vertical = document.createElement("ul");
        let linome = document.createElement("li");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let i = document.createElement("i");
        let textnome = document.createTextNode(nome.nome);
        span.appendChild(textnome);
        linome.appendChild(span);
        linome.appendChild(i);
        vertical.appendChild(linome);
        root.appendChild(vertical);

        let a = root.lastChild;
        a.classList.add("vertical");
        a.setAttribute("id", key);
        let b = a.firstChild;
        b.classList.add("nome");
        b.lastChild.classList.add("fas");
        b.lastChild.classList.add("fa-sort-down");
    });
}

function createDescription(id){
    render[id] = people[id];
}

function createClick(){
    const item = document.querySelectorAll(".vertical");
    item.forEach(element => {    
        element.addEventListener("click", function(){
            let idCreate = element.id;
            unrenderDescription();
            console.log(this.id);
            if (idCreate == this.id) {
                if (i==0) {
                    createDescription(this.id);
                    i++;
                }else{
                    i = 0;
                }
            }else{
                createDescription(this.id);
            }
                
            renderDescription();
            
        })
    });
}

function renderDescription(){
    render.forEach((itens, key) => {
        const item = document.getElementById(key);
        if(Object.entries(itens).length != 0){
            let text = "<li class='nome'><span>"+ Object.entries(itens)[0][1] + "</span><i class='fas fa-sort-down'></i></li><ul class = 'desc'>";
            Object.entries(itens).forEach(e => {
                text = text+"<li>"+e[0]+": "+e[1]+"</li>";
            });
            item.innerHTML = text;
           /*  console.log(Object.entries(itens)[0]); */
        }
    });
}

function unrenderDescription(){
    render.forEach((itens, key) => {
        if(Object.entries(itens).length != 0){
            let item = document.getElementById(key);
            let desc = item.querySelector(".desc");
            if (desc != null) {
                render =    [
                    {},{},{},{},{},{},{},{},{},{}  
                ];
                item.innerHTML = "<li class='nome'><span>"+ Object.entries(itens)[0][1] + "</span><i class='fas fa-sort-down'></i></li>";
            }
        }
    });
    
    
}

    

