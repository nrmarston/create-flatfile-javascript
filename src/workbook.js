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
