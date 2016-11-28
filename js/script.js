$(function(){
	$(".knowledge").on("click", function(){
		//alert("cv");
		$(this).parent("li").find("ul").slideToggle();
	});
});