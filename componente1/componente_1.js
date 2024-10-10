let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div-componente1";

componentes.forEach(itemLista => {
    let div_item = document.createElement("componente1");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_componentes);
