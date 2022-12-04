let x = document.getElementById("login")
let y = document.getElementById("register")
let z = document.getElementById("btn")

// document.head = document.head || document.getElementsByTagName('head')[0];
//document.title= document.title || document.getElementByTagName('title)[0]

function changeFavicon(src) {
    let link = document.createElement('link'),
        oldLink = document.getElementById('favicon');
        link.id = 'favicon';
        link.rel = 'icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "50%";
    document.title = "Register"
    changeFavicon('images/register.png');
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    document.title = "Login"
    changeFavicon('images/login.png');
}