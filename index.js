import express from "express";
const app = express();

app.listen(3000, function() {
    console.log("App is running at port 3000");
});

app.get("/", (req, resp) =>{
    // console.log(req.rawHeaders);
    resp.send("<h1>Hello At Welcome Page</h1>");
});
app.get("/about", (req, resp) =>{
    // console.log(req.rawHeaders);
    resp.send("<h1>This is about me page</h1>");
});

app.get("/contact", (req, resp) =>{
    // console.log(req.rawHeaders);
    resp.send("<h1>This is contactMe page</h1>");
});