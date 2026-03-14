const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// show form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// handle form submission
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const review = req.body.review;
    const rating = req.body.rating;

    res.send(`
    <html>
    <head>
    <title>Survey Result</title>

    <style>
    body{
        font-family: Arial;
        background:#f2f2f2;
        text-align:center;
    }

    .box{
        background:white;
        width:400px;
        margin:auto;
        margin-top:50px;
        padding:20px;
        border-radius:8px;
        box-shadow:0px 0px 10px gray;
        text-align:left;
    }

    a{
        display:block;
        margin-top:20px;
        text-align:center;
        text-decoration:none;
        background:#4CAF50;
        color:white;
        padding:10px;
        border-radius:5px;
    }
    </style>

    </head>

    <body>

    <div class="box">

    <h2>Customer Feedback</h2>

    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Bus Review:</b> ${review}</p>
    <p><b>Star Rating:</b> ${rating} ⭐</p>

    <a href="/">Submit Another Feedback</a>

    </div>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});