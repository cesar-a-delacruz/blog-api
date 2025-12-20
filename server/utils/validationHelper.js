export default {
  errorMessages: {
    empty: "must not be empty",
    alpha: "must contain letters only",
    url: "must be a URL",
  },
  customCallbacks: {
    dateTime: (value) =>
      new Date(value).getFullYear() === new Date().getFullYear(),
    enum: (value, enumValues = []) => enumValues.includes(value),
  },
};
