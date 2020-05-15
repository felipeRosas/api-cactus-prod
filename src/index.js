const app = require('./app');
require('./database');

async function init(){
    await app.listen(process.env.PORT);
    console.log('Server UP');
}

init();