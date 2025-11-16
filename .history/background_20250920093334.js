chrome.runtime.onInstalled.addListener(()=>{
    chrome,Storage.sync.get(["geminiApiKey"],(result)=>{
        if(!result.geminiApiKey){
            chrome.tabs.create({
                url:"options.h"
            })
    })
})