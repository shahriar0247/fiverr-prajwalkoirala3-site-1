var dropdown = document.getElementsByClassName("dropbtn")
var dropdown_content = document.getElementsByClassName("dropdown-content")

function hover_nav(i) {

    dropdown[i].addEventListener("mouseenter", function() {
        dropdown_content[i].classList.add("dropdown-visible");

    });


    dropdown[i].addEventListener("mouseleave", function() {
        dropdown_content[i].classList.remove("dropdown-visible");

    });

    dropdown_content[i].addEventListener("mouseenter", function() {
        dropdown_content[i].classList.add("dropdown-visible");


    });
    dropdown_content[i].addEventListener("mouseleave", function() {
        dropdown_content[i].classList.remove("dropdown-visible");


    });


}

for (i = 0; i < dropdown.length; i++) {
    hover_nav(i)
}