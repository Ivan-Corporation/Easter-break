import breakWebPage from "./lib";

chrome.runtime.onMessage.addListener(function (msg, _ ,sendResponse) {
    if (msg.command && msg.command == "break_web_page") {
      breakWebPage();
      sendResponse("Ok");
    }
  });
  