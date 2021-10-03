const path = require('path');
const express = require('express');
const CacheHandler = require('./cacheHandler');
const cityRouter = require('./routers/city');

const app = express();
const port = process.env.PORT || 3001;

require('console-stamp')(console, { 
    format: ':date(yyyy/mm/dd HH:MM:ss.l)' 
} );

//Initialize data cahce
const cahceHandlerInstance = CacheHandler.getInstance();
console.log('initializing data cache');
const cacheInit = cahceHandlerInstance.init();

// Set express server
const buildDir = path.join(__dirname, '..', 'build');
app.use(express.static(buildDir));

app.use(cityRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
    console.log('setting up cache layer')
    cacheInit.then(cacheHandler => {
        console.log('cache handler initialized!')
        console.log('Server is listening to port ' + port);
    })
})