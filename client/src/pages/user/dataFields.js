export default [
  { name: "id", type: "hidden" },
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  { name: "password", label: "Password", type: "password" },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { label: "Author", value: "AUTHOR" },
      { label: "Reader", value: "READER" },
    ],
    default: "AUTHOR",
  },
];
