$(function(){
	
	var secPicHeight = $("main").find("section").first().height();
	var secNameHeight = $("main").find("section").last().height();

	$(".knowledge").on("click", function(){
		$(this).parent("li").find("ul").slideToggle();
		$(this).find("span").toggleClass("hide");
		oneMouseover();
	});
	
	//oneMouseover();
	
	
	function oneMouseover() {
	$("body, section, .knowledge").one("mouseover",function(){
	secPicHeight = $("main").find("section").first().height();
	secNameHeight = $("main").find("section").last().height();
	if(secPicHeight>=secNameHeight) {
		$("main").css("background-color","white");
		console.log("trigger");
	}
	else if(secPicHeight<secNameHeight){
		$("main").css("background-color","#899299");
		console.log("trigger2");
	}
	});
	}
});