exports.homePage = (req, res) => {
  res.render("layout.ejs", { about: "me" });
};
