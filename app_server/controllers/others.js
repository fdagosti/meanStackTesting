/* GET "about" page */
module.exports.about = function(req, res, next) {
  res.render('generic-text', { 
    title: 'About',
    content: "Loc8r was create to help people find places to sit down and get a bit of work done. \n\n Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum " 
});
};