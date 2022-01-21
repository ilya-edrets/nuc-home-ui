import express from "express";
import pug from "pug";

const app = express();

app.get("/", function (req, res) {
    res.send(pug.renderFile("./templates/index.pug"));
});

app.listen(3000);

console.log("Service was started at 3000 port");
