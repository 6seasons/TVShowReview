const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html') );
});

app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    } else {
        console.log('not working')
    }
})