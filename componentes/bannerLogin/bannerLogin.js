export function bannerLogin(){
    let div = document.createElement("div");
    div.className = "fondo1";
   

    let fondo2 = document.createElement("div");
    fondo2.className = "fondo2";
    div.appendChild(fondo2);
    
    let img1 = document.createElement("img");
    img1.src = "../../assets/fonts/Vector.png";
    img1.className = "img1";
    div.appendChild(img1);

    let img2 = document.createElement("img");
    img2.src = "../../assets/fonts/Fashion.png";
    img2.className = "img2";
    div.appendChild(img2);
    
    //titulo
    let h1 = document.createElement("h1");
    h1.textContent = "Welcome Back!";
    h1.className ="welcome";
    div.appendChild(h1);

    //parrafo
    let textoP = document.createElement("p");
    textoP.className = "textoP"
    textoP.textContent = "Yay! You're back! Thanks for shopping with us.We have excited deals and promotions going on, grab your pick now! ";
    div.appendChild(textoP);

    //Título "LOG IN" (span)
    let tituloLogin = document.createElement("span");
    tituloLogin.className ="log";
    tituloLogin.textContent = "LOG IN";
    div.appendChild(tituloLogin);

    //  Texto "Email address" 
    let emailTexto = document.createElement("span");
    emailTexto.textContent = "Email address";
    emailTexto.className ="emailT";
    div.appendChild(emailTexto);

    // Rectángulo (div) con imagen y texto al lado
    let emailInputDiv = document.createElement("div");
    emailInputDiv.className = "emailCuadro1";

    let emailImg = document.createElement("img");
    emailImg.src = "../../assets/iconos/carta.png";
    emailImg.className = "carta";

    let emailText = document.createElement("input");
    emailText.type = "text";
    emailText.placeholder = "Enter your email";
    emailText.className = "emailText";

    emailInputDiv.appendChild(emailImg);
    emailInputDiv.appendChild(emailText);
    div.appendChild(emailInputDiv);

    // Texto "Password" (span)
    let passTexto = document.createElement("span");
    passTexto.textContent = "Password";
    passTexto.className = "pass";
    div.appendChild(passTexto);

    // Rectángulo (div) con imagen y texto al lado
    let passInputDiv = document.createElement("div");
    passInputDiv.className = "passCuadro";

    let passImg = document.createElement("img");
    passImg.src = "../../assets/iconos/Lock.png"; 
    passImg.alt = "password icon";

    let passText = document.createElement("input");
    passText.type = "password";
    passText.placeholder = "Enter your password";

    passInputDiv.appendChild(passImg);
    passInputDiv.appendChild(passText);
    div.appendChild(passInputDiv);

    //"Remember me" + "Forgot Password?" 
    let opcionesDiv = document.createElement("div");
    opcionesDiv.className = "opciones-login";

    let rememberDiv = document.createElement("div");
    rememberDiv.className = "remember";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let rememberLabel = document.createElement("label");
    rememberLabel.textContent = "Remember me";
    rememberLabel.className = "rememberT";

    rememberDiv.appendChild(checkbox);
    rememberDiv.appendChild(rememberLabel);

    let forgotSpan = document.createElement("span");
    forgotSpan.className = "forgot-pass";
    forgotSpan.textContent = "Forgot Password?";

    opcionesDiv.appendChild(rememberDiv);
    opcionesDiv.appendChild(forgotSpan);
    div.appendChild(opcionesDiv);

    // Botón "LOG IN" (div)
    let loginBtn = document.createElement("div");
    loginBtn.className = "login-btn";
    loginBtn.textContent = "LOG IN";
    div.appendChild(loginBtn);

    // Texto "Not registered yet? Create an Account" 
    let text2 = document.createElement("span");
    text2.className = "contenedor-text2";

    let registerSpan = document.createElement("span");
    registerSpan.textContent = "Not registered yet?  ";
    

    let Account = document.createElement("span");
    Account.textContent = "   Create an Account";
    Account.className = "Account";

    text2.appendChild(registerSpan);
    text2.appendChild(Account);

    div.appendChild(text2);

    return div;
}