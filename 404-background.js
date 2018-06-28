// This is where the background page goes!


// making an ajax request to detect the page error early so we can intercept the client's redirect.
  $.ajax(serverUrl, {
   type: OutageViewModel.Id() == 0 ? "POST" : "PUT",
   statusCode: {
      200: function (response) {
         alert('200');
         AfterSavedAll();
      },
      201: function (response) {
         alert('201');
         AfterSavedAll();
      },
      400: function (response) {
         alert('400');
      },
      404: function (response) {
         alert('404');
      }
   }, success: function () {
      alert('inside success func');
   },
});

// Adding a Listener to Error Occured Event
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


