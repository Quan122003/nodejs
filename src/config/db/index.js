const mongoose = require('mongoose');



async function connect(){
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/blo',{
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Kết nối thành công!');
    } catch (error) {
      console.log('Kết nối thất bại: ', error);
    }
  }

module.exports = { connect };

