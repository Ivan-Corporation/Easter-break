import easterBreaker from "./lib";

chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
  if (msg.command && msg.command == "break_web_page") {
    easterBreaker();
    sendResponse("Ok");
  }
});
