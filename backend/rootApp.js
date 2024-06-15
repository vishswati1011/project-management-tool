const  initializeDB = require('./dbSetup.tsx');

const initializeRoutes = async function (app) {

    app.get('/api', (req, res) => {
        res.send('Backend is running!');
    });

    // app.use(appServer);
    app.listen(8080, () => {
        console.log('Server is running on port 8080');
    });

}

async function rootApp (app) {

    await  initializeDB();
    return initializeRoutes(app);
    

}

module.exports = rootApp;