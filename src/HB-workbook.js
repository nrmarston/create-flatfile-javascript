// import { string, date } from "@flatfile/api/core/schemas";

export const workbook = {
  name: "Frontend Data",
  labels: ["pinned"],
  sheets: [
    {
      name: "Frontend",
      slug: "frontend",
      fields: [
        {
          key: 'Borrower First/Middle Name',
          label: 'Borrower First/Middle Name',
          type: string,
          constraints: [{ "type": "required" }]
        },
        {
          key: 'Borrower Last Name/Suffix',
          label: 'Borrower Last Name/Suffix',
          type: string
        },
        {
          key: 'Borr Cell Phone',
          label: 'Borr Cell Phone',
          type: string
        },
        {
          key: 'Borr Email',
          label: 'Borr Email',
          type: string,
          constraints: [{ "type": "required" }]
        },
        {
          key: 'Borr DOB',
          label: 'Borr DOB',
          description: 'MM/DD/YYYY (This field is used to display reverse mortgage for eligible homeowners).',
          type: date,
          metadata: {
            format: 'M-d-yyyy'
          }
        },
        {
          key: 'Borr Language Preference',
          label: 'Borr Language Preference',
          description: 'English or Spanish',
          type: 'enum',
          config: {
            options: [
              { value: "english", label: "en" },
              { value: "spanish", label: "es" },
            ]
          },
        },
        {
          key: 'Co-Borrower First/Middle Name',
          label: 'Co-Borrower First Name',
          type: string
        },
        {
          key: 'Co-Borrower Last Name/Suffix',
          label: 'Co-Borrower Last Name',
          type: string
        },
        {
          key: 'Co-Borr Cell Phone',
          label: 'Co-Borr Phone',
          type: string
        },
        {
          key: 'Co-Borr Email',
          label: 'Co-Borr Email',
          type: string
        },
        {
          keyi: 'Co-Borr DOB',
          label: 'Co-Borr DOB',
          description: 'MM/DD/YYYY (This field is used to display reverse mortgage for eligible homeowners).',
          type: date,
          metadata: {
            format: 'M-d-yyyy'
          }
        },
        {
          key: 'Co-Borr Language Preference',
          label: 'Co-Borr Language Preference',
          description: 'English or Spanish',
          type: 'enum',
          config: {
            options: [
              { value: "english", label: "en" },
              { value: "spanish", label: "es" },
            ]
          },
        },
        {
          key: 'Subject Property Address',
          label: 'Subject Property Address',
          type: string,
          constraints: [{ "type": "required" }]
        },
        {
          key: 'Subject Property Zip',
          label: 'Subject Property Zip',
          type: string,
          constraints: [{ "type": "required" }]
        },
        {
          key: 'Subject Property Appraised Value',
          label: 'Subject Property Appraised Value',
          type: string
        },
        {
          key: 'Subject Property Appraised Date',
          label: 'Subject Property Appraised Date',
          type: date,
          metadata: {
            format: 'M-d-yyyy'
          },
          description: 'Smart dates'
        },
        {
          key: 'Subject Property Purchase Price',
          label: 'Subject Property Purchase Price',
          type: string
        },
        {
          key: 'Subject Property Purchase Date',
          label: 'Subject Property Purchase Date',
          type: string,
          description: 'Smart dates',
        }
      ]
    }
  ],
  actions: [
    {
      operation: "submitActionFg",
      mode: "foreground",
      label: "Submit",
      description: "Submit data",
      primary: true,
    },
  ],
};
