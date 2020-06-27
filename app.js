const express = require("express");
var fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));


// let serveFavicon = require("serve-favicon");
// app.use(express.static(path.join(__dirname)));
// app.use(serveFavicon(path.join(__dirname, 'favicon.ico')));


app.listen(PORT, () => {
    console.log("the app is running ");
});
