chrome.runtime.onInstalled.addListener(()=>{
    chrome,Storage.sync.get(["geminiAPIkEy"])
})