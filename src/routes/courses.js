const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');


router.post('/store', CourseController.store);

router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.get('/:slug', CourseController.show);
router.delete('/:id', CourseController.destroy);
router.get('/', CourseController.create);


module.exports = router;