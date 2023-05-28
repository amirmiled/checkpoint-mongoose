const express = require ('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')

app.use(express.json())


mongoose.connect("mongodb+srv://amir:amir@cluster0.l9hezpa.mongodb.net/mongooseCheckpoint?retryWrites=true&w=majority")
.then(() => console.log("database connected"))
.catch((err)=> {if (err) throw err})


app.use('/api', require("./routes/contactRoutes"))

app.listen(PORT, () => console.log("listening on port", PORT))

