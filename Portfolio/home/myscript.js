var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tab){
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tab).classList.add("active-tab");
}