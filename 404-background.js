This is where the background page goes!
Adding a Listener to Error Occured Event
chrome.webNavigation.onErrorOccurred.addListener(function(data) {
  // Updating the browser window with desired URL
  chrome.tabs.update(data.tabID, {
    url: chrome.extension.getURL("newPage.html")
  };
});
// console.log(chrome.webNavigation.onErrorOccurred)
// var filter = {
//   url:
//   [
//     {hostContains: "example.com"},
//     {hostPrefix: "developer"}
//   ]
// }

// function logOnErrorOccurred(details) {
//   console.log("onErrorOccurred: " + details.url);
//   console.log(details.error);
// }

// chrome.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);


