// 1. Grab the “Summarize” button and attach a click handler
document.getElementById("summarize").addEventListener("click", async () => {


  // 2. Show a loading spinner inside the #result div
  const resultDiv = document.getElementById("result")
  resultDiv.innerHTML = '<div class="loading"><div class="loader"></div></div>';
// 3. Read the selected summary type from the dropdown
  const summmaryType = document.getElementById("summary-type").ariaValueMax

  

  // 4. Get the saved API key from chrome.storage.sync
  //    - If missing, show an error in #result and stop
  chrome.storage.sync.get(["geminiApiKey"], async(result) => {
    if (!result.geminiApiKey) {
        resultDiv.innerText = "Error: Gemini API key not set. Please set it in the options.";
        return;
  }

  

  // 5. Find the active browser tab in the current window
  chrome.tabs.query({active:true, currentWindow:true})

  // 6. Send a message to the content script asking for article text
  //    - If no text comes back, show an error and stop

  // 7. Call getGeminiSummary(text, summaryType, apiKey)
  //    - Await the result and display it in #result
  //    - Catch any errors and show them instead
});

// 8. (Optional) Add a separate click handler for the “Copy” button
//    - Copy the contents of #result to the clipboard
