import api from "@flatfile/api";
import { FlatfileListener } from "@flatfile/listener";
import { recordHook } from "@flatfile/plugin-record-hook";

export const listener = FlatfileListener.create((listener) => {
  listener.on("**", (event) => {
    console.log("Event =>", event.topic);
  });

  listener.use(
    recordHook("contacts", (record) => {
      // FirstName field transformation and validation
      const value = record.get("firstName");
      if (typeof value === "string") {
        record.set("firstName", value.toLocaleUpperCase());
      } else {
        record.addError("firstName", "Invalid first name");
      }

      // Email field validation
      const email = record.get("email");
      const validEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email !== null && !validEmailAddress.test(email)) {
        console.log("Invalid email address");
        record.addError("email", "Invalid email address");
      }
      return record;
    })
  );

  listener.on(
    "job:ready",
    { job: "workbook:submitActionFg" },
    async ({ context: { jobId } }) => {
      try {
        await api.jobs.ack(jobId, {
          info: "Getting started.",
          progress: 10,
        });

        // Make changes after cells in a Sheet have been updated
        console.log("Make changes here when an action is clicked");

        await api.jobs.complete(jobId, {
          outcome: {
            acknowledge: true,
            message: "This is now complete.",
            next: {
              type: "wait",
            },
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
    }
  );
});
