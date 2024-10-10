let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div-componentes";
 
let formularios = [
    {nombre: "main", link: "../componentes/main/main.html"},
    {nombre: "componente1", link: "../componentes/componente1.html"},
    {nombre: "componente2", link: "../componentes/componente2.html"},
    {nombre: "componente3", link: "../componentes/componente3.html"},
];

componentes.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_componentes);
