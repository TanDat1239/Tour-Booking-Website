// require('dotenv').config()
// const express = require('express')
// const mongoose = require('mongoose')
// // const cors = require('cors')
// // const fileUpload = require('express-fileupload')
// // const cookieParser = require('cookie-parser')
// // const path = require('path')


// const app = express()
// // app.use(express.json())
// // app.use(cookieParser())
// // app.use(cors())
// // app.use(fileUpload({
// //     useTempFiles: true
// // }))

// // Routes
// // app.use('/user', require('./routes/userRouter'))
// // app.use('/api', require('./routes/categoryRouter'))
// // app.use('/api', require('./routes/upload'))
// // app.use('/api', require('./routes/productRouter'))
// // app.use('/api', require('./routes/paymentRouter'))



// // Connect to mongodb
// const url = "mongodb://localhost:27017/nienluan";
// mongoose.connect(url, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err =>{
//     if(err) throw err;
//     console.log('Ket noi thanh cong !!!')
// })

// app.get('/',(req,res) => {
//     res.json({msg: "Node js"})
// })

// const PORT = process.env.PORT || 5000
// app.listen(PORT, () =>{
//     console.log(Server is running on port, PORT)
// })