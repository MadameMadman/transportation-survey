$(document).ready(function() {
  $("#transportation_survey").submit(function() {
    event.preventDefault();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("#transportation_survey").fadeOut(100);
    $("#work-responses").fadeIn(100);
  });
});
