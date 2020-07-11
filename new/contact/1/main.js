function modeChange() {
    document.body.classList.toggle('dark-mode');

    var elem = document.getElementsByClassName("mdc-chip__text")[0];
    //elem.value = "Enable Dark Mode";
    if (elem.value == "Enable Light Mode") {
        elem.value = "Enable Dark Mode";
        document.getElementsByTagName("html")[0].style.background = "#fff"

    } else {
        elem.value = "Enable Light Mode";

        document.getElementsByTagName("html")[0].style.background = "#121212"
    }
}