requirejs.config({
	paths:{
		'jquery':'jquery-3.1.1'
	}
});
requirejs(['jquery','scrollto'],function($,scrollto){
		console.log(scrollto);
		var scroll= new scrollto.ScrollTo({
			dest:100,
			speed:500
		});
	    checkPosition($(window).height());
		$("#backTop").on('click',$.proxy(scroll.move,scroll));
		$(window).on('scroll',function(){
			checkPosition($(window).height());
		})

		// function move (){
		// 	$('html,body').animate({
		// 		scrollTop:0
		// 	},800)
		// }

		function checkPosition(pos){
			if($(window).scrollTop()>pos){
				$('#backTop').css('display','block');
				$("#backTop").fadeIn();				
			}else{
				$("#backTop").fadeOut();
		    }
		}
});