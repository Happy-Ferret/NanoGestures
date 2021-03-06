const extensionStorage = browser.storage.sync;

async function onInstalled(details) {
	let { leftEnabled = true, rightEnabled = true, upEnabled = true, downEnabled = true, minDelta = 4 } = await extensionStorage.get(["leftEnabled", "rightEnabled", "upEnabled", "downEnabled", "minDelta"]);
	await extensionStorage.set({ leftEnabled, rightEnabled, upEnabled, downEnabled, minDelta });
}

async function onMessage(request, sender, sendResponse) {
	switch (request.operation) {
		case "createNewTab": {
			browser.tabs.create({});
		}
	}
}

browser.runtime.onInstalled.addListener(onInstalled);
browser.runtime.onMessage.addListener(onMessage);
