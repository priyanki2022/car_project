$(document).ready(function(){
   $(".card").parent("a").css("text-decoration-line","none"); 
});
$(function(){

$("#mycollapse").on('shown.bs.collapse',function(){
           $("#showbtn").html('show less brands <b><i class="fas fa-angle-up"></i></b>') 
});
$("#mycollapse").on('hidden.bs.collapse',function(){
           $("#showbtn").html('show more brands <b><i class="fas fa-angle-down"></i></b>') 
});
    $("#signup").click(function(){
       $("#loginmodal").modal('hide');
    });
    $("#login").click(function(){
       $("#loginmodal1").modal('hide');
    });
    
    $("#collapse-1").on('shown.bs.collapse',function(){
           $("#arrows1").html('<i class="fas fa-angle-up close"></i>') 
});
$("#collapse-1").on('hidden.bs.collapse',function(){
           $("#arrows1").html('<b><i class="fas fa-angle-down close"></i></b>') 
});
     $("#collapse-2").on('shown.bs.collapse',function(){
           $("#arrows2").html('<i class="fas fa-angle-up close"></i>') 
});
$("#collapse-2").on('hidden.bs.collapse',function(){
           $("#arrows2").html('<b><i class="fas fa-angle-down close"></i></b>') 
});
     $("#collapse-3").on('shown.bs.collapse',function(){
           $("#arrows3").html('<i class="fas fa-angle-up close"></i>') 
});
$("#collapse-3").on('hidden.bs.collapse',function(){
           $("#arrows3").html('<b><i class="fas fa-angle-down close"></i></b>') 
});
    $("#collapse-4").on('shown.bs.collapse',function(){
           $("#arrows4").html('<i class="fas fa-angle-up close"></i>') 
});
$("#collapse-4").on('hidden.bs.collapse',function(){
           $("#arrows4").html('<b><i class="fas fa-angle-down close"></i></b>') 
});
    $("#collapse-5").on('shown.bs.collapse',function(){
           $("#arrows5").html('<i class="fas fa-angle-up close"></i>') 
});
$("#collapse-5").on('hidden.bs.collapse',function(){
           $("#arrows5").html('<b><i class="fas fa-angle-down close"></i></b>') 
});
    $("#collapse-6").on('shown.bs.collapse',function(){
           $("#arrows6").html('<i class="fas fa-angle-up close"></i>') 
});
$("#collapse-6").on('hidden.bs.collapse',function(){
           $("#arrows6").html('<b><i class="fas fa-angle-down close"></i></b>') 
});
    
    $("#pcollapse").on('shown.bs.collapse',function(){
           $("#readmore").html('Collapse');
});
$("#pcollapse").on('hidden.bs.collapse',function(){
           $("#readmore").html('Read More');
});
});
