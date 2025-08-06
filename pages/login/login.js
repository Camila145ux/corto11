import { banner2 } from "../../componentes/bannerLogin/bannerLogin.js";

export function login(){
    let login = document.createElement("div");
    login.className = "login";

    let h1 = document.createElement("h1");
    h1.className = "titulo";
    h1.textContent = "Geeta";


    let h3 = document.createElement("h3");
    h3.className = "h3";
    h3.textContent="Create your fashion in your own way";
    
    let p = document.createElement("p");
    p.className = "parrafo";
    p.textContent="Each men and women has their own style, Geeta help you to create your unique style. ";


    let lBoton = document.createElement("l");
    lBoton.className = "l-boton";
    lBoton.textContent = "LOGIN IN";

    let OR = document.createElement("p");
    OR.className = "or";
    OR.textContent=" - OR -";

    let rBoton = document.createElement("r");
    rBoton.className ="r-boton";
    rBoton.textContent = "REGISTER"

    login.appendChild(h1);
    login.appendChild(h3);
    login.appendChild(p);
    login.appendChild(lBoton);
    login.appendChild(OR);
    login.appendChild(rBoton);
    login.appendChild(banner2());

    return login;
}

document.body.appendChild(login());
