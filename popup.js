'use strict';

var isTranslationReveal = 'isTranslationReveal';

function onLoad() {
  var translateRevealToggle = document.getElementById('translateReveal');

  translateRevealToggle.addEventListener('change', function () {
    saveChanges(translateRevealToggle.checked);
  });

  chrome.storage.sync.get(isTranslationReveal, function (items) {
    translateRevealToggle.checked = items[isTranslationReveal];
  });
}

function saveChanges(isTranslationReveal) {
  chrome.storage.sync.set({isTranslationReveal: isTranslationReveal});
}

document.addEventListener('DOMContentLoaded', onLoad, false);
