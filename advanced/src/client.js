import { initializeFlatfile } from "@flatfile/javascript";
import { workbook } from "./workbook";
const server_url = "http://localhost:8080";

const usersTable = {
  "user1@example.com": "us_sp_yRuaABM5",
  "user2@example.com": null,
  "user3@example.com": null,
};

// open existing space in modal
window.openFlatfile = ({ publishableKey, environmentId, userId }) => {
  // Check if the user exists in the usersTable.json
  if (usersTable.hasOwnProperty(userId)) {
    const spaceId = usersTable[userId];
    if (spaceId) {
      // User exists in the table, proceed to get the accessToken
      fetch(server_url + "/space")
        .then((response) => response.json())
        .then((space) => {
          const accessToken = space && space.data && space.data.accessToken;
          // Initialize Flatfile with both spaceId and accessToken
          const flatfileOptions = {
            space: {
              id: spaceId,
              accessToken: accessToken,
            },
          };
          initializeFlatfile(flatfileOptions);
        })
        .catch((error) => {
          console.error("Error retrieving space in client:", error);
          // Handle error appropriately
        });
    } else {
      // spaceId is null, so include publishableKey
      const flatfileOptions = {
        publishableKey,
        environmentId,
        workbook,
        sidebarConfig: {
          showSidebar: false,
        },
        // Additional props...
      };
      initializeFlatfile(flatfileOptions);
    }
  } else {
    // User not found in the table, handle this case
    console.error("User not found in usersTable.json");
    // You can show an error message or take appropriate action here
  }
};
