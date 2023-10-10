import { initializeFlatfile } from "@flatfile/javascript";
import { workbook } from "./workbook";
import { listener } from "../listeners/simple";
//read file
import * as fs from "fs";

// Load the user data from the JSON file
const userTablePath = "usersTable.json";

fetch(userTablePath)
  .then((response) => response.json())
  .then((userTable) => {
    // Now you have access to the userTable data

    const userTableData = fs.readFileSync(userTablePath, "utf8");
    userTable = JSON.parse(userTableData);
    console.log(userTable);
  })
  .catch((error) => {
    console.error("Error loading userTable data:", error);
  });

// Function to check if a user exists and retrieve their spaceId
function getUserSpaceId(userId) {
  const spaceId = userTable[userId];
  return spaceId || null;
}

// Function to add a new user record with a generated spaceId
function addUser(userEmail) {
  const spaceId = `generated_spaceId_${Date.now()}`;
  userTable[userEmail] = spaceId;
  // Save the updated userTable back to the JSON file
  fs.writeFileSync(userTablePath, JSON.stringify(userTable, null, 2), "utf8");
  return spaceId;
}

//create a new space in modal
window.openFlatfile = ({ publishableKey, environmentId }) => {
  if (!publishableKey && !environmentId) {
    throw new Error(
      "You must provide a publishable key and an environment ID - pass through in index.html"
    );
  }

  const flatfileOptions = {
    name: "Embedded Space",
    publishableKey,
    environmentId,
    workbook,
    listener,
    closeSpace: {
      operation: "submitActionFg",
      onClose: () => setShowSpace(false),
    },
    sidebarConfig: {
      showSidebar: false,
    },
    themeConfig: {
      root: {
        primaryColor: "red",
      },
      sidebar: {
        logo: "https://images.ctfassets.net/hjneo4qi4goj/gL6Blz3kTPdZXWknuIDVx/7bb7c73d93b111ed542d2ed426b42fd5/flatfile.svg",
      },
    },
    ...(spaceId ? { spaceId } : {}), // Include spaceId conditionally
    // Additional props...
  };

  initializeFlatfile(flatfileOptions);
};
