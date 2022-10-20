let submitBtn = document.querySelector("#submit_btn")

submitBtn.addEventListener("click", () => {
    let componentTitle = document.querySelector("#component_title").value;
    let componentCode = document.querySelector("#component_code").value;
    let componentStyle = document.querySelector("#component_style").value;

    let c = new Component(componentTitle, componentCode, componentStyle);
    c.save();
})