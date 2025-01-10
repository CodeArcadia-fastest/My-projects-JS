function add(){
    let elements = document.querySelector(".elements")

    let newElement = document.createElement("div")
    newElement.textContent = "Bu yangi element"
    newElement.classList.add("box")

    rang = document.querySelector(".color-code").value
    newElement.style.backgroundColor = `#${rang}`
    text = document.querySelector(".enter-text").value;
    newElement.textContent = `${text}`;
    newElement.style.textAlign = 'center'

    let hegiht = document.querySelector(".heig").value
    newElement.style.height  = `${hegiht}px`

    let size = document.querySelector(".size").value
    newElement.style.fontSize  = `${size}px`

    let eni = document.querySelector(".eni").value
    newElement.style.width  = `${eni}px`

    elements.appendChild(newElement);
    lastCreatedElement = newElement;
}
function remove(){
    let h1 = document.querySelector(".box")
    h1.remove()
}