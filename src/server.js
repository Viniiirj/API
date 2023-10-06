const express = require("express");

const app = express();
app.use(express.json())

app.post('/users', (request, response) => {

    const { name, email, senha } = request.body
    response.json({ name, email, senha })
})

const PORT = 3333;
app.listen(PORT, () => {console.log(`server is running on Port ${PORT}`)})