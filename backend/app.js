const express =require('express');
const  bodyParser = require('body-parser');
const cors = require('cors');
const rootApp = require('./rootApp');
const dbSetup = require('./dbSetup.tsx');

// Create express app
const app = express();

app.use(cors({credential :true , origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
    );
    next();
});


// Define a root route

let appServer;
(async () => {
    appServer = await rootApp(app);

}
)();