const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');



const Course = new Schema({
    name: {type: String,require: true,},
    description: {type: String,},
    image: {type: String,require: true,},
    slug: { type: String, slug: "name", unique: true, },
    videoid: {type: String,require: true,},
},{
    timestamps: true,
});

mongoose.plugin(slug);


module.exports = mongoose.model('Course', Course);