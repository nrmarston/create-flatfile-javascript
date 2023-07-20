import dotenv from "dotenv";
import { initializeFlatfile } from "@flatfile/javascript";

dotenv.config();

//open existing space in modal
window.openExistingFlatfileSpace = () => {
  fetch((process.env.SERVER_URL ?? "http://localhost:8080") + "/space") // Make a request to the server endpoint
    .then((response) => response.json())
    .then((space) => {
      const flatfileOptions = {
        space: {
          id: space && space.data && space.data.id,
          accessToken: space && space.data && space.data.accessToken,
        },
        displayAsModal: true,
      };
      initializeFlatfile(flatfileOptions);
    })
    .catch((error) => {
      console.error("Error retrieving space in client:", error);
    });
};

//create a new space in modal
window.initializeNewFlatfileSpace = (publishableKey, environmentId) => {
  const flatfileOptions = {
    publishableKey,
    environmentId,
    displayAsModal: false,
    // Additional parameters...
  };

  initializeFlatfile(flatfileOptions);
};
