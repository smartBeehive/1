;;
$(document).ready(function(){
	$(this).scroll(function(){
		if($(this).scrollTop()>600)
		{
			$(".scroll").css("display", "block");
		}
		else
		{
			$(".scroll").css("display", "none");
		}
	});

	$(".scroll").click(function(){
		$(document).scrollTop(0);
	});

	$('.carousel').carousel({
      interval: 6000
    });
});
