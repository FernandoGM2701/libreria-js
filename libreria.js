export function createElement(type, attrList = {}, children = []) {
    let elem = document.createElement(type)

    let keys = Object.keys(attrList)
    keys.map(k => elem.setAttribute(k, attrList[k]))

    children.map(child => renderChild(elem, child))
    return elem
}

function renderChild(elem, child){
    if(typeof child === "string"){
        elem.innerHTML += child
        return
    }
    elem.appendChild(child)
}

export function render(elemento, DOMelement){
    DOMelement.appendChild(elemento)
}