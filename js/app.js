$(function (){
    $("#jumbotron").load("html/home.html");
    
    $("#next").click(function () {
        $("#jumbotron").load("html/disclaimer.html");
    });
})