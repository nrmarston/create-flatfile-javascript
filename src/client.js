import { initializeFlatfile } from "@flatfile/javascript";
import { config } from "./config";
import { listener } from "./listener";
const server_url = "http://localhost:8080";

//open existing space in modal
window.openExistingFlatfileSpace = () => {
  fetch(server_url + "/space") // Make a request to the server endpoint
    .then((response) => response.json())
    .then((space) => {
      const flatfileOptions = {
        space: {
          id: space && space.data && space.data.id,
          accessToken: space && space.data && space.data.accessToken,
        },
        displayAsModal: false,
      };
      initializeFlatfile(flatfileOptions);
    })
    .catch((error) => {
      console.error("Error retrieving space in client:", error);
    });
};

//create a new space in modal
window.initializeNewFlatfileSpace = ({publishableKey, environmentId}) => {
  if (!publishableKey && !environmentId) {
    throw new Error(
      "You must provide a publishable key and an environment ID"
    );
  }
  const flatfileOptions = {
    publishableKey,
    displayAsModal: false,
    workbook: config,
    environmentId,
    listener,
    // Additional parameters...
  };

  initializeFlatfile(flatfileOptions);
};
