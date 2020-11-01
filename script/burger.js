$(document).ready(function(){

	$('.header__burger').click(function(){
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});