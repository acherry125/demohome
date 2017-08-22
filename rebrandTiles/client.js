$(document).foundation();

$(document).ready(function () {
	var $headerOverlay = $('.header-overlay');
	$headerOverlay.each(function (ind, el) {
		var headerTextHeight = $(el).find('.header').height(),
			padding = 10,
			totalHeaderHeight = headerTextHeight + padding;
		$(el).css('max-height', totalHeaderHeight);
		$(el).data('orig-height', totalHeaderHeight);
	})
});

$(document).on('click', '.tile-angle', function() {
	var $parentTile = $(this).closest('.tile')
		$otherTiles = $('.tile').not($parentTile),
		$siblingTaskOverlay = $parentTile.find('.task-overlay'),
		$siblingHeaderOverlay = $parentTile.find('.header-overlay'),
		tileStripHeight = 20;
	$otherTiles.removeClass('active-task-overlay');
	$otherTiles.find('.task-overlay').height('0');
	if($parentTile.is('.active-task-overlay')) {
		$siblingTaskOverlay.height('0');
	} else {
		$siblingTaskOverlay.height('100px');
	}
	$parentTile.toggleClass('active-task-overlay');
});

$(document).on('mouseenter mouseleave', '.header-overlay', function() {
	$('.task-overlay').height('0');
	$('.tile').removeClass('active-task-overlay');
});
/*
$(document).on('mouseenter', '.tile-image-link', function() {
	var $parentTile = $(this).closest('.tile'),
		$siblingHeaderOverlay = $parentTile.find('.header-overlay');
	$siblingHeaderOverlay.css('max-height', 'calc(100% - 20px)');
	$parentTile.removeClass('active-task-overlay');
});
*/