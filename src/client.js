import { initializeFlatfile } from "@flatfile/javascript";
import { workbook } from "./workbook";
import { configureFlatfileListener } from "../listeners/simple";

//create a new space in modal
window.initializeNewFlatfileSpace = ({ publishableKey, environmentId }) => {
  if (!publishableKey && !environmentId) {
    throw new Error(
      "You must provide a publishable key and an environment ID - pass through in index.html"
    );
  }
  const flatfileOptions = {
    publishableKey,
    displayAsModal: true,
    workbook,
    environmentId,
    listener: configureFlatfileListener(),
    // Additional parameters...
  };

  initializeFlatfile(flatfileOptions);
};
