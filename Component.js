class Component{
    constructor(title, code, style){
        this.title = title;
        this.code = code;
        this.style = style;
    }
    save(){
        let components = JSON.parse(localStorage.getItem('components')) || []; 
        components.push({
            title: this.title,
            code: this.code,
            style: this.style
        });
        localStorage.setItem('components', JSON.stringify(components));
        alert("Component saved!")
    }
}

