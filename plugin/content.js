chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === "fetchText") {
      const selectedText = window.getSelection().toString();
      sendResponse({ text: selectedText });
    }
  });
