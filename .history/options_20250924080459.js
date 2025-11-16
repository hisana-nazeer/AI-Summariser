// options.js
document.addEventListener("DOMContentLoaded", () => {
  const apiInput = document.getElementById("api-key");
  const saveBtn = document.getElementById("save-btn");

  // 1. Load saved API key if it exists
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (result.geminiApiKey) {
      apiInput.value = result.geminiApiKey;
    }
  });

  // 2. Save API key when button is clicked
  saveBtn.addEventListener("click", () => {
    const apiKey = apiInput.value.trim();

    if (!apiKey) {
      alert("Please enter a valid API key.");
      return;
    }

    // store under the key name geminiApiKey
    chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
      alert("API key saved!");
    });
  });
});
