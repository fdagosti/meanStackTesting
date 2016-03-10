/* GET "locations" pages */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { title: 'Home' });
};

module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { title: 'locationInfo' });
};

module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'addReview' });
};