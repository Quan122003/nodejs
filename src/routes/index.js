const newsRoute = require('./news');
const coursesRoute = require('./courses');
const loginsRoute = require('./user');
const siteRoute = require('./site');


function route(app){
    app.use('/user', loginsRoute);
    app.use('/new', newsRoute);
    app.use('/courses', coursesRoute);
    app.use('/', siteRoute);
}


module.exports = route;