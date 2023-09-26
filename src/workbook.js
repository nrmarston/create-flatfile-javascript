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
          constraints: [{ "type": "required" }]
        },
        {
          key: "lastName",
          type: "string",
          label: "Last Name",
        },
        {
          key: "fullName",
          type: "string",
          label: "Full Name",
          description: 'If not provided, the system will generate this is from First & Last name.',
        },
        {
          key: "email",
          type: "string",
          label: "Email",
          description: 'Please enter your email',
          constraints: [{ "type": "unique" }]
        },
        {
          key: "phone",
          type: "string",
          label: "Phone Number",
        },
        {
          key: "date",
          type: "string",
          label: "Date",
        },
        {
          key: "country",
          type: "string",
          label: "Country"
        },
        {
          key: "zipCode",
          type: "string",
          label: "Zip Code",
        },
        // {
        //   key: "numberTest",
        //   label: "Number",
        //   type: "number"
        // },
        {
          key: "subscriber",
          label: "Subscriber?",
          type: "boolean",
        },
        {
          key: "status",
          label: "Deal Status",
          type: "enum",
          config: {
            options: [
              { value: "red", label: "New" },
              { value: "2", label: "Interested" },
              { value: "meet", label: "Meeting" },
              { value: "4", label: "Opportunity" },
              { value: "5", label: "Not a fit" },
              { value: "51", label: "Wilson" }
            ]
          },
          constraints: [{ "type": "required" }]
        },
        {
          key: "ccId",
          label: "CC ID",
          description: "Cost center code pulled from reference file",
          type: "reference",
          config: {
            ref: "costcenters",
            key: "code",
            relationship: "has-one"
          }
        },
        {
          key: "ccName",
          label: "CC Name",
          description: "Cost center name that matches related record in cost center sheet.",
          type: "string",
          readonly: true,
        },
      ],
    },
    {
      slug: "costcenters",
      name: "Cost Centers",
      fields: [
        {
          key: "code",
          type: "string",
          label: "code",
          constraints: [{ "type": "required" }, { "type": "unique" }]
        },
        {
          key: "name",
          type: "string",
          label: "CC Name"
        }
      ]
    }
  ],
  actions: [
    {
      operation: "submitActionFg",
      mode: "foreground",
      label: "Submit",
      description: "Submit data to webhook.site",
      primary: true,
    },
  ],
};
