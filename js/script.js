$(function(){
	$(".knowledge").on("click", function(){
		//alert("cv");
		$(this).parent("li").find("ul").slideToggle();
		var secName = $(this).closest("section");
		var secPic = $(this).closest("main").find("section").first();
		var secNameHeight = secName.height();
		var secPicHeight = secPic.height();
		if((secPicHeight)<(secNameHeight)){
			secPic.animate({height:secNameHeight})
		}
		else{
			secPic.animate({height:secPicHeight})
		}

		
		
		
		
		alert("first " + secPicHeight);
		alert("second " + secNameHeight);
	});
});