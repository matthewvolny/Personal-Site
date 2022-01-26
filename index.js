const express = require("express"),
  app = express(),
  controllers = require("./controllers/controllers"),
  ejsLayouts = require("express-ejs-layouts"),
  port = 3000;

app.set("view engine", "ejs");

// use layout for each page of a site
app.use(ejsLayouts);

//allows us to serve static files, js, html, css from our public folder
//app.use(express.static("public"));
// app.use((req, res, next) => {
//   console.log(`request made to ${req.url}`);
//   next();
// });

// app.use(express.urlencoded());

app.get("/", controllers.homePage);

//allows us to serve static files, js, html, css from our public folder
// app.use(express.static(path.join(__dirname + "/public")));
//how to serve a static file
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname + "about2.html"));
// });

//moved to the projects.js router file
// app.get("/projects", (req, res) => {
//   res.send("projects");
// });

// app.get("/projects/latest", (req, res) => {
//   res.send("latest");
// });

//calls router module which serves client any of the urls starting with "/projects"
// const projects = require("./routes/projects");
// app.use("/projects", projects);

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
