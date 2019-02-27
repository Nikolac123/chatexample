let express = require("express")
let cors = require("cors")
let poraki = []
let poraka1 = {
    sender: "Nikola",
    message: "Zdravo"
}
let poraka2 = {
    sender: "Kristijan",
    message: "Kako si"
}
poraki.push(poraka1)
poraki.push(poraka2)

let server = express()
server.use(express.json())
server.use(cors())
server.use(express.static("./static"))
server.get("/messages", (req, res) => {
    res.send(poraki)
} )

server.listen(8080)