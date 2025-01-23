const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const ProductRoute = require('./routes/productRoute')
const DB_URL = 'mongodb+srv://narminjabbar:narmin2005@cluster0.qce9h.mongodb.net/Selling?retryWrites=true&w=majority&appName=Cluster0'
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api/products', ProductRoute)


mongoose.connect(DB_URL)
.then(() => {
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    console.log('Connected!')
});