const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json({branch: "develop"})
})

app.listen(8000, () => console.log("Running on port 8000"))