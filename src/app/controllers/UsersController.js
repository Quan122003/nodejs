const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const toastr = require('toastr');
// const { mongooseToObject } = require('../../utill/mongoose')
const jwt = require('jsonwebtoken')


class userControll {
    register(req, res){
        res.render('user/register');
    }
   
    login(req, res, next) {
        res.render('user/login')
    }

    
    checklogin(req, res, next) {
        const name = req.body.name
        const email = req.body.email;
        const password = req.body.password;
      
        User.findOne({ 
          name: name,
          email: email, 
          password: password
         })
          .then(data => {
            if (data) {
                var token = jwt.sign({
                  _id: data._id
                },'mk')
                return res.json({
                  message: 'thanh cong',
                  token: token
                })
                // res.redirect('/');
            } else {
              res.status(300).json('không đúng')
            }
          })
          .catch(err =>{
            res.status(500).json('loi server')
          });
    }
      
      

    store(req, res, next){
        const formData = req.body;
        // const hashedPassword = bcrypt.hashSync(formData.password, 10); // Hash password
        const user = new User({
          password: formData.password,
          email: formData.email,
          name: formData.name
        });
        user.save();
        res.send('Thành công');
    }



}
// module.exports xuất ra ngoài exports cái gì thì khi require chúng ta nhận được cái đó
module.exports = new userControll