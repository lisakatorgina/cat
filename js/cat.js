$(function() {
	$('.cat').on('mouseover', function() {
		$(this).find('audio').get(0).play();
	}).on('mouseout', function() {
		$(this).find('audio').get(0).pause();
	})
})