const path = require('path');
const express = require('express');
// morgan giúp chúng ta không cần phải reset lại trang để code chạy
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3333;
// hổ trợ dùng meethod put path
const methodOverride = require('method-override')
app.use(methodOverride('_method'))



// connect to DB
const db = require('./config/db');
db.connect();


//Use static folder
app.use(express.static(path.join(__dirname,'public')));


// hquan sát request
app.use(morgan('combined'));
// template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
// dùng thư viện path của nodejs nó có thẻ trả về những việc liên quan đến đường dẫn của chúng ta  path.join(__dirname, 'resources/views'))
app.set('views', path.join(__dirname, 'resources','views'));
// console.log( path.join('path: ' + __dirname, 'resources/views'));


// Middleware 
// ham số extended: true được sử dụng để bật tính năng parsing của JSON body với độ sâu lớn hơn 1 level
app.use(express.urlencoded({
  extended: true
}));
//  Middleware này được sử dụng để phân tích các thông tin đến từ yêu cầu HTTP được gửi từ trình duyệt, với kiểu dữ liệu application/x-www-form-urlencoded. Các thông tin này sẽ được trích xuất và đưa vào đối tượng req.body trong ExpressJS.
app.use(express.json());
// Middleware này được sử dụng để phân tích các thông tin đến từ yêu cầu HTTP được gửi từ trình duyệt, với kiểu dữ liệu application/json. Các thông tin này sẽ được trích xuất và đưa vào đối tượng req.body trong ExpressJS.

const route = require('./routes');
const router = require('./routes/news');
const { mainModule } = require('process');
// Routes init
route(app);



app.listen(port, () => {
  console.log(`Ứng dụng đang chạy`);
});
