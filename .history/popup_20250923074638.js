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
  
  chrome.tabs.query({active:true, currentWindow:true}, ([tab])=>{
    chrome.tabs.sendMessage(
        tab.id,
        {type:"GET_ARTICLE_TEXT"},

        // 6. Send a message to the content script asking for article text
  //    - If no text comes back, show an error and stop

        async(resp) =>{
            if(!res || !res.text){
                resultDiv.innerText="Error: Could not extract article from this page."
                return
            }
        }

    )
  })

  

  // 7. Call getGeminiSummary(text, summaryType, apiKey)
  //    - Await the result and display it in #result
  //    - Catch any errors and show them instead
  try{
    const summary = await getGeminiSummary(res.text, summaryType, result.geminiApiKey);
    resultDiv.innerText = summary;
  }
  catch(err){

  }

// 8. (Optional) Add a separate click handler for the “Copy” button
//    - Copy the contents of #result to the clipboard

async function getGeminiSummary(text, summaryType, apiKey){
    const maxLength=20000
    const truncatedText = text.length > maxLength? text.substring(0, maxLength)+"...": text;
    
    let prompt
    switch(summaryType){
        case "brief":
          prompt =`Provide a brief summary of the following article in 2-3 sentences:\n\n${truncatedText}`;
      break;
      case "detailed":
      prompt = `Provide a detailed summary of the following article, covering all main points and key details:\n\n${truncatedText}`;
      break;
    case "bullets":
      prompt = `Summarize the following article in 5-7 key points. Format each point as a line starting with "- " (dash followed by a space). Do not use asterisks or other bullet symbols, only use the dash. Keep each point concise and focused on a single key insight from the article:\n\n${truncatedText}`;
      break;
    default:
      prompt = `Summarize the following article:\n\n${truncatedText}`;
  }
  // WE ARE sending request to gem8ini api with key and prompt
   try{
    const res = await fetch(
         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
         {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ],
            generationConfig: {
                temperature: 0.2
            }
        })
    });

   if(!res.ok)
    const errorData = await res.json();
    throw new Error(errorData.error.message || "Unknown error from Gemini API");
}
const data =  awaitres.json()
return(
   data 
)
}


