$(function() {
    $("#jumbotron").load("home.html");
    
    $("#next").click(function () {
        $("#jumbotron").load("disclaimer.html");
    });
})