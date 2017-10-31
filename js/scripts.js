//Back End


//UI
$(document).ready(function(){
  $("#inputs").submit(function(event) {
    event.preventDefault();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input3").val();
    var input4 = $("#input4").val();

    var array = [input1, input2, input3, input4];

    var fav1 = array[0];
    var fav2 = array[1];
    var fav3 = array[2];
    var fav4 = array[3];

    $(".result").append("<li>" + fav1);
    $(".result").append("<li>" + fav2);
    $(".result").append("<li>" + fav3);
    $(".result").append("<li>" + fav4);




});
});
