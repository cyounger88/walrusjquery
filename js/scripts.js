$(document).ready(function() {
  $(".clickable").click(function() {
    var walruses = ["walrus-showing", "walrus-hidden"];
    walruses.forEach(function(walrus){
      $("#" + walrus).slideToggle();
    });
    // $("#walrus-showing").slideToggle();
    // $("#walrus-hidden").slideToggle();
  });
});
