chrome.runtime.onInstalled.addListener(()=>{
    chrome,Storage.sync.get(["geminiApiKey"],(result)=>{
        if(!result.geminiApiKey){
            chrome.tabs.create({
                //create a new tab to open options page
                url:"options.html",
            })
        }
        })
})