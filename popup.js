'use strict';

var isTranslationReveal = 'isTranslationReveal';

function onLoad() {
  var translateRevealToggle = document.getElementById('translateReveal');

  translateRevealToggle.addEventListener('change', function () {
    var t = translateRevealToggle;
    saveChanges(t.checked);
  });

  chrome.storage.sync.get(isTranslationReveal, function (items) {
    translateRevealToggle.checked = items[isTranslationReveal];
  });
}

function saveChanges(isTranslationReveal) {
  chrome.storage.sync.set({isTranslationReveal: isTranslationReveal}, function () {
    console.log('Settings saved');
  });
}

document.addEventListener('DOMContentLoaded', onLoad, false);
