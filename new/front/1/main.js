var searchbar = document.getElementById("searchbox")
var list = document.getElementById("search-dropdown")
var searchbtn = document.getElementById("searchbtn")

searchbar.addEventListener("mouseenter", function() {
    list.classList.add("list_visible")
    searchbtn.style.opacity = "0"
})

searchbar.addEventListener("mouseleave", function() {
    list.classList.remove("list_visible")
    searchbtn.style.opacity = "1"
})


list.addEventListener("mouseenter", function() {
    list.classList.add("list_visible")
    searchbtn.style.opacity = "0"
})

list.addEventListener("mouseleave", function() {
    list.classList.remove("list_visible")
    searchbtn.style.opacity = "1"
})

function modeChange() {
    document.body.classList.toggle('dark-mode');
    var elem = document.getElementsByClassName("mdc-button__label")[0];
    //elem.value = "Enable Dark Mode";
    if (elem.value == "Enable Light Mode") {
        elem.value = "Enable Dark Mode";
        elem.innerHTML = "Enable Dark Mode";
    } else {
        elem.value = "Enable Light Mode";
        elem.innerHTML = "Enable Light Mode";
    }
}