const app = require('./app');

//app.listen(4000, () => {
//    console.log('Server Okey Baby');
//})

/**SETTINGS */
app.set('port', process.env.PORT || 2000);

/**Starting the server */
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});