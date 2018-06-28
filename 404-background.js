// This is where the background page goes!
<<<<<<< HEAD
// Adding a Listener to Error Occured Event
// chrome.webNavigation.onErrorOccurred.addListener(function(data) {
//   // Updating the browser window with desired URL
//   chrome.tabs.update(data.tabID, {
//     url: chrome.extension.getURL("newPage.html")
//   };
// });
=======


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
>>>>>>> 6738ac84737fe463488e9b5206e453311dba6f89
  
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

// $.ajax(serverUrl, {
//    type: OutageViewModel.Id() == 0 ? "POST" : "PUT",
//    data: dataToSave,
//    statusCode: {
//       200: function (response) {
//          alert('200');
//          AfterSavedAll();
//       },
//       201: function (response) {
//          alert('201');
//          AfterSavedAll();
//       },
//       400: function (response) {
//          alert('400');
//          AfterSavedAll();
//          // alert('<span style="color:Red;">Error While Saving Outage Entry Please Check</span>', function () { });
//       },
//       404: function (response) {
//          alert('404');
//          AfterSavedAll();
//          // bootbox.alert('<span style="color:Red;">Error While Saving Outage Entry Please Check</span>', function () { });
//       }
//    }, success: function () {
//       alert('Success');
//    },
// });
// console.log("Hello")

// var pattern=/\bBlocked/;
// var viewtext_base_url = "http://viewtext.org/article?url=";
// var newurl;
// if (pattern.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl = viewtext_base_url + encodeURIComponent(window.location.href);
//   chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

// }

console.log("Test to see if this is being loaded")
