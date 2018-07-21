
$(function() {

 $('.accordion__content').hide();
 $('.accordion__button:first').next().slideDown();

 $('.accordion__button').click(function(){
   if ( $(this).next().is(':hidden')) {
     $('.accordion__button').next().slideUp();

     $(this).next().slideDown();
   

   } 
   return false;
 });

});

