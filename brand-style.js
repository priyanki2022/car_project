$(document).ready(function(){
   $(".nav .nav-item .nav-link").click(function(){
      $(".nav-link").removeClass("active");
       $(this).closest(".nav-link").addClass("active");
   });
});