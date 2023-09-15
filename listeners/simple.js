import api from "@flatfile/api";
import { recordHook } from "@flatfile/plugin-record-hook";

/**
 * Example Listener
 */
export default function (listener) {
  listener.on("**", (event) => {
    console.log("Event =>", event);
  });

  listener.use(
    recordHook("contacts", (record) => {
      const firstName = record.get("firstName");
      console.log({ firstName });
      // Getting the real types here would be nice but seems tricky
      record.set("lastName", "Rock");
      return record;
    })
  );

  listener.filter({ job: "workbook:submitActionFg" }, (configure) => {
    configure.on("job:ready", async ({ context: { jobId } }) => {
      try {
        await api.jobs.ack(jobId, {
          info: "Getting started.",
          progress: 10,
        });

        // Make changes after cells in a Sheet have been updated
        console.log("Make changes here when an action is clicked");

        await api.jobs.complete(jobId, {
          outcome: {
            message: "This job is now complete.",
          },
        });
      } catch (error) {
        console.error("Error:", error.stack);

        await api.jobs.fail(jobId, {
          outcome: {
            message: "This job encountered an error.",
          },
        });
      }
    });
  });
}
