chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (sender.tab !== undefined) {
        	return false;
        }

        if (request.action === 'get window.innerWidth') {
            sendResponse({
            	innerWidth: window.innerWidth
            });
        }
});
