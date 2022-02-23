const express = require('express');
const axios = require('axios').default;
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/say', async (req, res) => {
    const keyword = req.query.keyword;

    return axios.get(`https://s83ux2cqwc.execute-api.us-east-1.amazonaws.com/default/Assignment09?keyword=${keyword}`)
    .then(function (response) {
        console.log(response.data);
        res.send(response.data);
        res.end();
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
});

app.listen(port, () => {
    console.log(`App listening at http://143.244.171.204:${port}`);
});