const { request } = require("express");

const express = require("express");
const router = express.Router();

//ROUTER

router.get("/", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Homepage</h1>")
})

router.get("/about", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>About</h1>")
})
router.get("/products", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Here is the view of our store. Enjoy :)</h1>")
})
router.get("/contact", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Find us here!</h1>")
})

module.exports = router;