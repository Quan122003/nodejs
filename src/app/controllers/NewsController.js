class NewsController {
    // [GET] /home
    index(re, res){
        res.render('new');
    }
    // [GET] /home/:slug
    show(re, res){
        res.send('trang sach');
    }
}
// module.exports xuất ra ngoài exports cái gì thì khi require chúng ta nhận được cái đó
module.exports = new NewsController