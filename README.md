A Chrome extension that summarizes the current web page basically needs two things:

Permission to read the page content (so it can grab text).

Somewhere to show the summary (a popup or injected panel).

Optionally, a background/service worker if you’re calling an API like Gemini.

permissions

activeTab: lets you access the tab the user clicked your extension on.

scripting: lets you inject a content script to scrape text.

action

default_popup: the small UI window where you can show the summary and a button like “Summarize Page.”

background

service_worker: where you put logic to call the Gemini API securely. The popup can send a message to it.

host_permissions

<all_urls> means you can read text from any page the user explicitly activates.

Next steps you’ll need (outside the manifest)

popup.html / popup.js – a button that triggers summarization.

contentScript.js – grabs the page’s text and sends it back.

background.js – takes the text, calls Gemini (or any API), and returns the summary to the popup.
