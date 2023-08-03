if (process.env.MY_APP_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
