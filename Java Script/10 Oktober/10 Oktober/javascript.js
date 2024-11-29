function klik(){
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.backgroundColor = "rgba(226, 177, 43, 1)";
    document.getElementById("submit").style.scale = "1.06";
}
function sign_click(){
    document.getElementById("sign-In").style.color = "white";
    document.getElementById("sign-In").style.backgroundColor = "rgba(226, 177, 43, 1)";
    document.getElementById("sign-In").style.scale = "1.06";
}
function notklik(){
    document.getElementById("submit").style.backgroundColor = "white";
    document.getElementById("submit").style.color = "black";
    document.getElementById("submit").style.scale = "1";
}
function not_sign_click(){
    document.getElementById("sign-In").style.backgroundColor = "white";
    document.getElementById("sign-In").style.color = "black";
    document.getElementById("sign-In").style.scale = "1";
}

function halaman_utama(){
    window.location = "/Ujian Kelompok 4 - Salin/indexkelompok4.html";
}

document.getElementById("submit").addEventListener("click", function(){
    // document.getElementById("popup").style.display = "block";
    var input = document.getElementById("pass").value.trim();
    var password = document.getElementById("password").value.trim();
    
    klik();
    setTimeout(notklik, 180);

    if (password.length >= 3 && input.length >= 3){
        document.getElementById("popup").style.display = "block";
    }
    if (password.length < 3){
        document.getElementById("password").style.borderBottom = "1px solid red";
    }
    else if (password.length = 3){
        document.getElementById("password").style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    }
    if (input.length < 3){
        document.getElementById("pass").style.borderBottom = "1px solid red";
    }
    else if (input.length = 3){
        document.getElementById("pass").style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    }
})  
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
    // notklik();
})
document.getElementById("cancel").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
    // notklik();
})

document.getElementById("sign-In").addEventListener("click", function(){
    var input = document.getElementById("pass").value.trim();
    var password = document.getElementById("password").value.trim();
    
    sign_click();
    setTimeout(not_sign_click, 180);

    if (password.length < 4 || input.length < 3) {
        alert("input tidak memenuhi syarat!!");
        document.getElementById("popup").style.display = "none";
    }
    else if (password.length > 12) {
        alert("password melebihi batas maksimal");
        document.getElementById("popup").style.display = "none";
    }
    else if (password == "muhmarzuq" && input == "MiscTM"){
        setTimeout(halaman_utama, 1000);
    }
    else if (password !== "muhmarzuq" || input !== "MiscTM") {
        // event.preventDefault();
        alert("akun " + input + " tidak tersedia");
        document.getElementById("popup").style.display = "none";
    }
})