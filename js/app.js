$(function (){
    $("#jumbotron").load("html/home.html");
    
    $("#disclaimer").click(function () {
        $("#jumbotron").load("html/disclaimer.html");
    });
})