const express = require('express')
// Using Node.js `require()`
const mongoose = require('mongoose');
const config = require('./config/dev')
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI)
    .then(
        () => {
            const sampleDb = new SampleDb()
            sampleDb.initDb()
        });

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products',function(req, res){
//     res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log('I am running')
})

// mongodb+srv://<username>:<password>@cluster0.q6ebhtx.mongodb.net/?retryWrites=true&w=majority