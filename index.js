
const express = require("express");
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 3000;

// Routes proto type when we need to display html page.

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li> ${user.first_name}`).join("")}}
    </ul>
    `;
    res.send(html)
})

// Real Routes
app.get("/api/users" , (req , res) => {
    return res.json(users);
});


app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.send(user)
})
.patch((req, res) => {
    // TODO
    return res.json({status : "padding"})
})
.delete((req, res) => {
    // TODO
    return res.json({status : "padding"})
})


app.post("/api/users/", (req, res) => {
    // TODO intial stage is padding
    return res.send({status : "padding"});
})

app.listen(PORT, () => {
    console.log(`server is running on localhost: ${PORT}`);
    
})