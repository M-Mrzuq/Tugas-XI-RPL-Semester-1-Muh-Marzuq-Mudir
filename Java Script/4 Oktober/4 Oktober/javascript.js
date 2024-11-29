alert("Selamat Datang Di Website JS ke-2");
var nama = prompt("Website Petani Kode Apa Yang ingin Kamu buka?", "");
var yakin = confirm("Apakah kamu yakin akan mengunjungi petanikode " + nama + "?");
    if (nama == "JS") {
        window.location = "https://www.petanikode.com/tutorial/javascript/";
    } 
    else if (nama == "CSS") {
        window.location = "https://www.petanikode.com/tutorial/css/";
    }
    else if (nama == "HTML") {
        window.location = "https://www.petanikode.com/tutorial/html/";
    } 
    else if (nama == "menu") {
        window.location = "https://www.petanikode.com/";
    } else {
        document.write("Yaudahh Disini Aja :>")
    }