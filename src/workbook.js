export const workbook = {
  name: "All Data",
  labels: ["pinned"],
  sheets: [
    {
      name: "Contacts",
      slug: "contacts",
      fields: [
        {
          key: "firstName",
          type: "string",
          label: "First Name",
        },
        {
          key: "lastName",
          type: "string",
          label: "Last Name",
        },
        {
          key: "email",
          type: "string",
          label: "Email",
        },
      ],
    },
    {
      name: "Products",
      slug: "products",
      fields: [
        {
          key: "productName",
          type: "string",
          label: "Product Name",
        },
        {
          key: "price",
          type: "number",
          label: "Price",
        },
        {
          key: "SKU",
          type: "string",
          label: "SKU",
        },
      ],
    },
  ],
  actions: [
    {
      operation: "submitActionFg",
      mode: "foreground",
      label: "Submit Data",
      description: "Submit data to webhook.site",
      primary: true,
    },
  ],
};
