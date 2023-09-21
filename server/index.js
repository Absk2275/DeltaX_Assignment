const express = require("express");
const app = express();

const PORT = 5000
app.post("/", (req, res)=> {
    app.send("Api is working");
})

app.listen(PORT, ()=>console.log(`Server is up at port ${PORT}`));