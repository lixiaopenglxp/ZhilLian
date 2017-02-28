$(function(){
	$('.big_li').on('click',function(){
		$('.big_li').removeClass('nav_active');
		$(this).addClass('nav_active');
	});
	var bOk=true;
	$('.big_li').eq(7).on('click',function(){
		if(bOk){
			$('.lt_menu').css('height','168px');
			$('.more').css('transform','scale(1,-1)');
			bOk=false;
			//更多服务
			$('.lt_li').on('click',function(){
				$('.lt_li').removeClass('nav_lt_active');
				$(this).addClass('nav_lt_active');
			});
		}else{
			$('.more').css('transform','rotate(0deg)');
			$('.lt_menu').css('height','0');
			$('.lt_li').removeClass('nav_lt_active');
			$('.lt_li').eq(0).addClass('nav_lt_active');
			bOk=true;
		}				
	});
	
	//选项卡
	$('#tab .btn').on('click',function(){
		$('#tab .btn').removeClass('tab_active');
		$(this).addClass('tab_active');
		$('.page').removeClass('contain_active');
		// alert($(this).index());
		$('.page').eq($(this).index()).addClass('contain_active');
	});	
	//充值hover效果
	$('.hover').hover(function(){
		// alert(1);
		$(this).addClass('bar_active');
	},function(){
		$(this).removeClass('bar_active');
	});	
});
