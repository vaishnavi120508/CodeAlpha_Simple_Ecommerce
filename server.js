const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// This serves your HTML and CSS files
app.use(express.static('./'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server is running! Open your browser to http://localhost:3000");
});