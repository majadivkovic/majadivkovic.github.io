$('[data-fancybox="gallery"]').fancybox({
	loop:true,
	animationDuration: 150,
	animationEffect: "fade",
	buttons: [
		//"zoom",
		//"share",
		//"slideShow",
		//"fullScreen",
		//"download",
		//"thumbs",
		"close"
	  ],
});

const $fuzzy = $('.fuzzy');
const $images = $('img')

$fuzzy.on("keyup search", function(evt) {
	const value = $fuzzy.val().toLowerCase();
	$images.parent().show();
	if (value !== '') {
	  $images.not('[data-caption*="' + value + '"]').parent().hide();
	}
});