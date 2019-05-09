$('a.open_bot').on('click', (e) => {
  e.preventDefault();
  if (window.hubspot_live_messages_running && window.hubspot && window.hubspot.messages) {
    window.hubspot.messages.EXPERIMENTAL_API.requestWidgetOpen();
  }
});
