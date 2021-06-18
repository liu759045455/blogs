const express = require("express");
const app = express();
const cors = require("cors");
const history = require('connect-history-api-fallback');

app.use(history());
app.use(require("express-session")({
    secret: "xiaobudong"
}))
app.use(express.static('./page'));
app.use(cors({
    origin: function (origin, callback) {
        if(!origin) {
            callback(null, "*")
            return;
        } 
        callback(null, origin);
    },
    credentials: true
}));

app.use(express.urlencoded());
app.use(express.json());

app.use('/api/content', require("./api/content"));
app.use('/api/image', require("./api/images"));
app.use('/api/learnlist', require("./api/learlist"));

const port = 9526;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})