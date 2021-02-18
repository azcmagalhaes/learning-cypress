function myFunction() {
    var selected = document.getElementById("test").value;
    var name = document.getElementById("name").value;
    var text = name + " is " + selected;
    document.getElementById("demo").innerHTML=text;
}