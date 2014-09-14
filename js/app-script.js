(function() {
	window.App = {};

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

				chrome.tabs.getSelected(null, function(tab) {
					chrome.tabs.sendMessage(tab.id, { action: 'get window.innerWidth' }, function(response) {
						var w = response.innerWidth,
							html = '@media all and (max-width: '+ w +'px) { /* your content here */ }';

						elCurrent.innerHTML = (w + 'px');
						htmlResult.innerHTML = html;
			        });
				});
			}
		}
	})();

	App.Init.initialize();

})();
