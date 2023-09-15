import { FlatfileListener } from "@flatfile/listener";
import { recordHook } from "@flatfile/plugin-record-hook";

/**
 * Example Listener
 */
/// Define the custom listener logic as a separate function
function customListenerLogic(client) {
  client.on("**", (event) => {
    console.log("Event =>", event);
  });

  client.use(
    recordHook("TestSheet", (record) => {
      const firstName = record.get("first_name");
      console.log({ firstName });
      // Getting the real types here would be nice but seems tricky
      record.set("last_name", "Rock");
      return record;
    })
  );
}

export default function configureFlatfileListener(listener) {
  // If a listener is provided, configure it
  if (listener) {
    customListenerLogic(listener); // Reuse the custom listener logic function
    return listener; // Return the configured listener
  } else {
    // If a listener is not provided, create a new one and apply the custom logic
    console.log("make a workbook");
    const newListener = FlatfileListener.create((client) => {
      customListenerLogic(client); // Reuse the custom listener logic function
    });

    return newListener;
    s;
  }
}
