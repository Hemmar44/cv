$(function(){
	
	var secPicHeight = $("main").find("section").first().height();
	var secNameHeight = $("main").find("section").last().height();

	$(".knowledge").on("click", function(){
		$(this).parent("li").find("ul").slideToggle();
		oneMouseover();
	});
	
	//oneMouseover();
	
	function oneMouseover() {
	$("body").one("mouseover",function(){
	secPicHeight = $("main").find("section").first().height();
	secNameHeight = $("main").find("section").last().height();
	if(secPicHeight>=secNameHeight) {
		$("main").css("background-color","white");
	}
	else if(secPicHeight<secNameHeight){
		$("main").css("background-color","#899299");
	}
	});
	}
});