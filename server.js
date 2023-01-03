const app = require("./app");
const dbLib = require("./lib/db");

dbLib
  .connect("mongodb://127.0.0.1:27017", "posts")
  //Pour verifier que la connexion a bien été établie
  .then((result) => console.log(result));

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
