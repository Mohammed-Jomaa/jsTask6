const show = document.querySelector(".btn button");
const hidden = document.querySelector(".side_bar button");
show.onclick = ()=>{
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".side_bar").classList.add("show_sidebar");
}
hidden.onclick = ()=>{
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".side_bar").classList.remove("show_sidebar");
}