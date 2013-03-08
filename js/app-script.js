//app-injected
function init() {
	var btMedia = $('#export-media'),
		htmlResult = $('#html-result'),
		elCurrent = $('#current-resolution').find('strong');

	btMedia.on('click', function(e) {
		e.preventDefault();

		chrome.windows.getCurrent(function(w) {
			var w = w.width,
				html = '@media all and (max-width: '+ w +') { /* your content here */ }';
			
			elCurrent.text(w + 'px');
			htmlResult.text(html);
		});

	});
}

$(function() {
	init();
});