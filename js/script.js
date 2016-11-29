$(function(){
	
	var secPicHeight = $("main").find("section").first().height();
	var secNameHeight = $("main").find("section").last().height();

	$(".knowledge").on("click", function(){
		$(this).parent("li").find("ul").slideToggle();
		
	});
	
	$("body").mouseover(function(){
	if(secPicHeight>=secNameHeight) {
		$("main").css("background-color","white");
		console.log("pic" + secPicHeight);
		console.log("name" + secNameHeight);
	}
	else if(secPicHeight<secNameHeight){
		$("main").css("background-color","gray");
		console.log("triggered2");
	}
	});

});