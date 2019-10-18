var full = 0
function addItem() {
    var newlist = document.createElement("li");
    var newtext = document.createTextNode(document.getElementById("list").value);
    newlist.appendChild(newtext);
    var position = document.getElementsByTagName("ol")[0];
    if (document.getElementById("list").value == "") {
        return;
    }
    if (full > 6) {
        var stop = document.getElementById("stop").innerHTML = "List is full";
        return;
    }
    position.appendChild(newlist);
    document.getElementById("list").value = "";
    full++
}
function removeItem() {
    var removelist = document.getElementById("remove").value;
    var getchild = document.getElementsByTagName("li")[removelist - 1];
    var getparent = getchild.parentNode;
    getparent.removeChild(getchild);
    document.getElementById("remove").value = "";
    full--
    if (full < 7) {
        var stop = document.getElementById("stop").innerHTML = "";
        return;
    }
}