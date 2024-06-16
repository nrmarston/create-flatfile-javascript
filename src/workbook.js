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
      name: "Companies",
      slug: "companies",
      fields: [
        {
          key: "name",
          type: "string",
          label: "Name",
        },
        {
          key: "summary",
          type: "string",
          label: "Summary",
        },
        {
          key: "phone",
          type: "phone",
          label: "Phone",
        },
        {
          key: "email",
          type: "email",
          label: "Email",
        },
        {
          key: "website",
          type: "url",
          label: "Website",
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
