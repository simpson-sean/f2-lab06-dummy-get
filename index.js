const app = require('./server.js');
const port = process.env.PORT || 7826;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})