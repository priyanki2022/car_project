$(document).ready(function(){
     $("#animate-1").waypoint(function(direction){
         $(".animate-1").addClass("animate__animated animate__backInLeft")
     },{
         offset:'50%'
     });
    $("#animate-2").waypoint(function(direction){
         $(".animate-2").addClass("animate__animated animate__backInRight")
     },{
         offset:'50%'
     });
    $("#animate-3").waypoint(function(direction){
         $(".animate-3").addClass("animate__animated animate__backInUp")
     },{
         offset:'50%'
     });
     $("#animate-4").waypoint(function(direction){
         $(".animate-4").addClass("animate__animated animate__backInUp")
     },{
         offset:'50%'
     });
     $("#animate-5").waypoint(function(direction){
         $(".animate-5").addClass("animate__animated animate__backInUp")
     },{
         offset:'50%'
     });
    $(".animate-6").waypoint(function(direction){
         $(".animate-6").addClass("animate__animated animate__backInUp")
     },{
         offset:'50%'
     });
    $("#animate-7").waypoint(function(direction){
         $(".animate-7").addClass("animate__animated animate__backInUp")
     },{
         offset:'50%'
     });
    $("#animate-8").waypoint(function(direction){
         $(".animate-8").addClass("animate__animated animate__backInUp")
     },{
         offset:'50%'
     });
});