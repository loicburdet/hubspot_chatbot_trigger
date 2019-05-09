![HubSpot](https://cdn2.hubspot.net/hubfs/327485/HubSpot%20Wordmark%20-%20Full%20Color.png "HubSpot")
## Code Gallery Snippet

---

# How to trigger a HubSpot Chatbot

1 - Create a link or a button
<a href="open-bot">Open My Bot</a>

2 - Create a script with Jquery
$('a.open_bot').on('click', (e) => {
  e.preventDefault();
  if (window.hubspot_live_messages_running && window.hubspot && window.hubspot.messages) {
    window.hubspot.messages.EXPERIMENTAL_API.requestWidgetOpen();
  }
});
