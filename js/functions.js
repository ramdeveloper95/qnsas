
$(document).ready(function() {
	$("#description-abouts").show();
    $(".abouts-div").hide();

});

function abouts(id){

	$(".enabled").css("display", "none");

	$("#description-" + id).fadeIn();

	$("#description-" + id).removeClass('disabled');
	$("#description-" + id).addClass('enabled');
}

$(document).ready(function() {

  $("#next").on("click", function() {
    if($('#service1').is(':visible')) {
      $("#service1").css("display", "none");
      $("#service2").fadeIn();
      $(".fa-chevron-left").css({
        opacity: 1,
        cursor: "pointer"
      });
    }
    else if($('#service2').is(':visible')) {
      $("#service2").css("display", "none");
      $(".fa-chevron-right").css({
        opacity: 0.3,
        cursor: "default"
      });
      $("#service3").fadeIn();
    }
  });

  $("#previous").on("click", function() {
    if($('#service3').is(':visible')) {
      $("#service3").css("display", "none");
      $("#service2").fadeIn();
      $(".fa-chevron-right").css({
        opacity: 1,
        cursor: "pointer"
      });
    }
    else if($('#service2').is(':visible')) {
      $("#service2").css("display", "none");
      $(".fa-chevron-left").css({
        opacity: 0.3,
        cursor: "default"
      });
      $("#service1").fadeIn();
    }
  });

});