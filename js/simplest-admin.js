$(document).ready(function(){
	$(".submenu a").on("click", function(){
		if($(this).parent().hasClass("open")) {
			$(this).parent().removeClass("open");
			$(this).children(".collapse").removeClass("fa-minus-square-o");
			$(this).children(".collapse").addClass("fa-plus-square-o");
		} else{
			$(this).parent().addClass("open");
			$(this).children(".collapse").removeClass("fa-plus-square-o");
			$(this).children(".collapse").addClass("fa-minus-square-o");
		}
		
	})
});