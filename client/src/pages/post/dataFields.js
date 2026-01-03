export default [
  { name: "id", type: "hidden" },
  {
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
  },
  {
    name: "media",
    label: "Media",
    type: "file",
  },
  {
    name: "access",
    label: "Access",
    type: "select",
    options: [
      { label: "Public", value: "PUBLIC" },
      { label: "Private", value: "PRIVATE" },
    ],
    default: "PUBLIC",
  },
];
