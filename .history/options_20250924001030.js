document.addEventListener("DOMContentLoaded", () => {
    //load saved API KEY if it exist
    chrome.storage.sync.get([geminiAPIKey], (result) =>{
        if (result.geminiAPIKey){
            Document.getElementById("api-key").value=result.geminiAPIKey
        }
    })

    //save api key when button is clicked
    document.getElementById("save-btn").addEventListener("click",() =>{
        const apiKey=document.get

