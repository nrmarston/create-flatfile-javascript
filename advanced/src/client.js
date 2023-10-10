import { initializeFlatfile } from "@flatfile/javascript";
const server_url = "http://localhost:8080";

const usersTable = {
  "user1@example.com": "us_sp_yRuaABM5",
  "user2@example.com": null,
  "user3@example.com": null,
};

//open existing space in modal
window.openFlatfile = (userEmail) => {
  // Check if the user exists in the usersTable.json

  if (usersTable.hasOwnProperty(userEmail)) {
    const spaceId = usersTable[userEmail];
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
          sidebarConfig: {
            showSidebar: false,
          },
          // Additional props...
        };
        initializeFlatfile(flatfileOptions);
      })
      .catch((error) => {
        console.error("Error retrieving space in client:", error);
        // Handle error appropriately
      });
  } else {
    // User not found in the table, handle this case
    console.error("User not found in usersTable.json");
    // You can show an error message or take appropriate action here
  }
};
