'use strict';

var shouldRevealTranslation = null;
var isTranslationReveal = 'isTranslationReveal';

function notifyRevealChanged(isTranslationReveal) {
  if (isTranslationReveal) {
    chrome.browserAction.setIcon({path: "red.png"});
  } else {
    chrome.browserAction.setIcon({path: "green.png"});
  }
}
chrome.storage.onChanged.addListener(function (changes) {
  shouldRevealTranslation = changes['isTranslationReveal'].newValue;
  notifyRevealChanged(shouldRevealTranslation);
});

chrome.webRequest.onBeforeRequest.addListener(function () {
  return shouldRevealTranslation ? {cancel: true} : {cancel: false};
}, {urls: ["*://static.parastorage.com/services/scheduler-client*scripts/locale/messages_en.js",
            "*://static.parastorage.com/services/scheduler-owner-statics*scripts/locale/messages_en.js"]
  , types: ["script"]}, ["blocking"]);

chrome.storage.sync.get(isTranslationReveal, function (items) {
  shouldRevealTranslation = items[isTranslationReveal];
  notifyRevealChanged(shouldRevealTranslation);
});
