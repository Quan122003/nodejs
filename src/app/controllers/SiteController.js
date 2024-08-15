const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../utill/mongoose')

class SiteController {
    // [GET] /home
    home(req, res, next){
        // res.render('home');
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    courses : mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    // [GET] /home/:slug
    search(req, res){
        res.render('search');
    }
}
// module.exports xuất ra ngoài exports cái gì thì khi require chúng ta nhận được cái đó
module.exports = new SiteController