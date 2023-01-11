
// Selecionar elemento
let container = document.querySelector('.container');
console.log("Elemento Selecionado: ", container);

// Pegar nodos filhos
let containerChilds = container.childNodes
console.log("childNodes Selecionado: ", containerChilds);

// Pegar priemiro filho da lista
let firstNode = container.firstChild;
console.log("firstNode Selecionado: ", firstNode);

// Pegar o nome da tag
let nodeName = container.nodeName;
console.log("nodeName Selecionado: ", nodeName);

// Pegar valor (texto) do nodo
let nodeValue = container.childNodes[3].firstChild.nodeValue;
console.log("nodeValue Selecionado: ", nodeValue);

// Pegar tipo elemento
let elemType = container.nodeType;
console.log("nodeType Selecionado: ", elemType);

// Pegar elemento "pai"
let parentElem = container.parentElement;
console.log("parentElem Selecionado: ", parentElem);

// Pegar primeito elemento filho
let firstChildElem = container.firstElementChild;
console.log("firstElementChild Selecionado: ", firstChildElem);

//pegar o último elemento filho
let lastChildElem = container.lastElementChild;
console.log("lastElementChild Selecionado: ", lastChildElem);

