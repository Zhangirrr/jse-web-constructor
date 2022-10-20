let pageDiv = document.querySelector(".page");
let componentsDiv = document.querySelector(".components");

let components = JSON.parse(localStorage.getItem("components")) || [];

for(let item of components){
    componentsDiv.innerHTML += ` 
    <button class="component_buttons">${item.title}</button>
    <br><br>
    `; 
}

let component_buttons = document.querySelectorAll(".component_buttons")

for(let i = 0; i < component_buttons.length; i++){
    component_buttons[i].addEventListener("click", () => {
        pageDiv.innerHTML += components[i].code;
        pageDiv.innerHTML += `<style>${components[i].style}</style>`;
        // console.log(components)
    })
}

