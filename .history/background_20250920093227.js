chrome.runtime.onInstalled.addListener(()=>{
    chrome,Storage.sync.get(["geminiAPI==Key"])
})