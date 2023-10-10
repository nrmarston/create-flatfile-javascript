import { initializeFlatfile } from "@flatfile/javascript";
import { workbook } from "./workbook";
import { listener } from "../listeners/simple";

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
    // Additional props...
  };

  initializeFlatfile(flatfileOptions);
};
