// // import express from "express"

// // const app = express()

// // const PORT = 5000

// // app.get("/", (request, response) => {
// //     response.send("HELLO WORLD 100")
// // })


// // app.get("/product", (request, response) => {
// //     console.log(request.ip, "request.ip")
// //     response.send(products)
// // })

// import express from "express"
// import { product } from "./product.js"

// const app = express()
// const PORT = process.env.PORT  || 3000;

// app.get("/", (request, response) => {
//     response.send("Hello World! blah blah blah aaaahhhh")
//     // response.send("<h1>Abay ja na</h1>")
// })

// app.get("/products", (request, response) => {
//     console.log("request.query", request.query)
//     const query = request.query
//     if (query?.limit) {
//         response.send(product.slice(0, query?.limit))
//     } else {
//         response.send(product)
//     }
// } )

// app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))


import express from "express"
import { product } from "./product.js"
import mongoose from "mongoose"

const app = express()
const PORT = process.env.PORT || 6900

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


const URI = "mongodb+srv://haseebhassan1155:aahsah06@learningmongodb.cj7nr3r.mongodb.net/"
mongoose.connect(URI).then(res => {
    console.log("MongoDB Connected")
})
.catch(err => {
    console.log("mongoDB error", err.message)
})

// get, put, post, delete
app.get("/", (req, res) => {
    res.json("Fuck Off Nigga")
    res.json({
        name: "Joe Mama",
    })
})

app.get("/products", (request, response) => {
    console.log("request.query", request.query)
    const query = request.query
    if (query?.limit) {
        response.send(product.slice(0, query?.limit))
    } else {
        response.send(product)
    }
} )

app.get("/getUser", (req, res) => {
    res.json({
        message: "This is a get user route.",
    })
})

app.post("/createUser", (req, res) => {
    res.json({
        message: "This is a create user route.",
    })
})

app.put("/putUser", (req, res) => {
    res.json({
        message: "This is a put user route.",
    })
})

app.delete("/deleteUser", (req, res) => {
    res.json({
        message: "This is a delete user route.",
    })
})

app.listen(PORT, ()=> console.log(`Server is runnimg on http://localhost:${PORT}`) )