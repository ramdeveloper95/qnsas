
$(document).ready(function() {
	$("#description-abouts").slideDown();
    $(".abouts-div").hide();

});

function abouts(id){

  /*Titulo del item*/
  title = $("#" + id).html();

  /*Oculta y muestra items sub menu*/
	$(".enabled").slideUp("slow");

	$("#description-" + id).slideDown("slow");

	$("#description-" + id).removeClass('disabled');
	$("#description-" + id).addClass('enabled');

  $("#title-abouts").html(title);
}

$(document).ready(function() {

  $("#next").on("click", function() {
    if($('#service1').is(':visible')) {
      $("#service1").slideUp("slow");
      $("#service2").slideDown("slow");
      $(".fa-chevron-left").css({
        opacity: 1,
        cursor: "pointer"
      });
    }
    else if($('#service2').is(':visible')) {
      $("#service2").slideUp("slow");
      $(".fa-chevron-right").css({
        opacity: 0.3,
        cursor: "default"
      });
      $("#service3").slideDown("slow");
    }
  });

  $("#previous").on("click", function() {
    if($('#service3').is(':visible')) {
      $("#service3").slideUp("slow");
      $("#service2").slideDown("slow");
      $(".fa-chevron-right").css({
        opacity: 1,
        cursor: "pointer"
      });
    }
    else if($('#service2').is(':visible')) {
      $("#service2").slideUp("slow");
      $(".fa-chevron-left").css({
        opacity: 0.3,
        cursor: "default"
      });
      $("#service1").slideDown("slow");
    }
  });

});