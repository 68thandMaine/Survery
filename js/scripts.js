$(document).ready(function(){
  // $("button#green").click(function() {
  //   $("body").addClass("green-background");
  // });

  $("#formOne").submit(function(event){
    event.preventDefault();
    var name = $("input#inputName1").val();
    var favfood = $("input#Inputfood").val();
    var favmusic = $("input#Inputmusic").val();
    var favice = $("#iceCream").val();


    $("ul#namepanel").append("<li>" + name + " " + "</li>");
    $("ul#foodpanel").append("<li>" + favfood + " " + "</li>");
    $("ul#musicpanel").append("<li>" + favmusic + " " + "</li>");
    $("ul#icecreampanel").append("<li>" + favice + " " + "</li>");
  
    $(".container-fluid").show();
    console.log(favice);


  });
});
