chrome.commands.onCommand.addListener((command) => {
    if (command === "send-text") {

      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: fetchSelectedText
        }, (results) => {
            console.log("result here")
            console.log(results)

          const highlightedText = results[0].result;
          sendToAPI(highlightedText);
        });
      });
    }
  });

  function fetchSelectedText() {
    return window.getSelection().toString();
  }

function sendToAPI(text) {
    console.log('supposed to be the text')
    console.log(text)
    fetch('http://127.0.0.1:8000/process-string?input_string='+text, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: text }),
    })
    .then(response => response.json())
        .then(data => {
            console.log(data)
    })
    .catch(error => console.error('Error:', error));
  }
