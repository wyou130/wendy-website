function openTab(tabName, elmt, color) {
    var i, headerTab, tablinks;
    headerTab = document.getElementsByClassName("headerTab");
    for (i = 0; i < headerTab.length; i++) {
        headerTab[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(tabName).style.display = "block";
    elmt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click()