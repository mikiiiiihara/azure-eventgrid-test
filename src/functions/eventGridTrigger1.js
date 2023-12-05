const { app } = require("@azure/functions");

app.eventGrid("EventGridLogger", {
  source: "EventGrid",
  handler: async (eventGridEvent, context) => {
    // イベントタイプとURLを取得
    const eventType = eventGridEvent.eventType;
    const url = eventGridEvent.data.url;

    // イベントタイプとURLをログに出力
    context.log(`Event Type: ${eventType}`);
    context.log(`URL: ${url}`);
  },
});
