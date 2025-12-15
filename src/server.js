require("dd-trace").init({
  env: process.env.DD_ENV || "prod",
  service: "basic-vps-pipeline-app"
});
const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
