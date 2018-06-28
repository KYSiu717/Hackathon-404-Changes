// This is where the background page goes!

chrome.webNavigation.onErrorOccurred.addListener(function(data) {
  chrome.tabs.update(data.tabID, {
    url: chrome.extension.getURL("newPage.html")
  };
});
