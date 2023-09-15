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
    publishableKey,
    environmentId,
    workbook,
    listener,
    // Additional props...
  };

  initializeFlatfile(flatfileOptions);
};
