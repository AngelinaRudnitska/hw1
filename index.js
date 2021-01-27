const express = require
    ('express');
const PORT = 5555;

const Routes = require("./router/Routes");
const app = express();

//Adding routes
app.use(Routes);

app.use("/about", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>About</h1>")
})
app.use("/contact", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Find us here!</h1>")
})
app.use("/products", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Here is the view of our store. Enjoy :)!</h1>")
})
app.use("/", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Homepage</h1>")
})

app.listen(PORT, () => console.log(`Server running on the port ${PORT}`))
app.use(Routes);