const Course = require('../models/Course');

const { mongooseToObject } = require('../../utill/mongoose')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
        .then(course => {
            res.render('courses/show', {course: mongooseToObject(course)});
        })
        .catch(next);
    }



    create(req, res, next){
        Course.find({})
        .then(course => {
            res.render('courses/create', {course: mutipleMongooseToObject(course)});
        })
        .catch(next);
    }

    store(req, res, next){
        const course = new Course(req.body)
        course.save()
    }


    edit(req, res, next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }

    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/courses'))
        .catch(next);
    }

    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
          .then(() => res.redirect("back"))
          .catch(next);
      }
}
// module.exports xuất ra ngoài exports cái gì thì khi require chúng ta nhận được cái đó
module.exports = new CourseController