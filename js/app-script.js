(function() {
	window.App = App || {};

	App.Init = (function() {

		return {
			initialize: function() {
				this.addEvent();
			},

			addEvent: function() {
				var btMedia = document.getElementById('export-media'),
					htmlResult = document.getElementById('html-result'),
					el = document.getElementById('current-resolution'),
					elCurrent = document.getElementById('current');

				btMedia.addEventListener('click', function() {
					console.log('interaction');
					chrome.windows.getCurrent(function(w) {
						var w = w.width,
							html = '@media all and (max-width: '+ w +'px) { /* your content here */ }';
						
						elCurrent.innerHTML = (w + 'px');
						htmlResult.innerHTML = html;
					});
				}, false);
			}
		}
	})();

	App.Init.initialize();

})();