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
    name: "Contact",
    publishableKey,
    environmentId,
    workbook,
    listener,
    closeSpace: {
      operation: "submitActionFg",
      onClose: () => setShowSpace(false),
    },
    sidebarConfig: {
      showSidebar: true,
    },
    themeConfig: {
      root: {
        primaryColor: "blue",
      },
      sidebar: {
        logo: "https://img.logoipsum.com/282.svg",
      },
    },
    // Additional props...
  };

  initializeFlatfile(flatfileOptions);
};
