const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.send('Hello')
});

app.use((req, res) =>{
    res.sendFile(`${basePath}/404.html`)
})


app.listen(8000, () => console.log(`Server running on PORT: ${PORT}`))