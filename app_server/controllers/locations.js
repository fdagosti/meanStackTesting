/* GET "locations" pages */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { 
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
        title: "Loc8r",
        strapline: "Find places to work with wifi near you!"
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for",
    locations: [{
        name: "Starcups",
        address: "41 rue Gay Lussac 92320 Paris",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium Wifi"],
        distance: "100m"
    },
    {
        name: "Cafe Hero",
        address: "41 rue Gay Lussac 92320 Chatillon",
        rating: 4,
        facilities: ["Hot drinks", "Food", "Premium Wifi"],
        distance: "200m"
    },
    {
        name: "Burger Queen",
        address: "41 rue Gay Lussac 92320 Berlin",
        rating: 2,
        facilities: ["Food", "Premium Wifi"],
        distance: "250m"
    }

    ] 

  });
};


module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { 
    title: 'Starcups' ,
    pageHeader: {title: "Starcups"},
    sidebar: {
        context: "is on Loc8r because it has accessible wifi and space o sit down with you laptop and get some work done.",
        callToAction: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
    },
    location: {
        name: "Starcups",
        address: "41 rue Gay Lussac 92320 Chatillon",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium Wifi"],
        coords: {lat: 48.804694, lng: 2.280829},
        openingTimes: [{
            days: "Monday - Friday",
            opening: "7:00am",
            closing: "7:00pm",
            closed: false
        },{
            days: "Saturday",
            opening: "8:00am",
            closing: "5:00pm",
            closed: false
        },{
            days: "Sunday",
            closed: true
        }],
        reviews: [{
            author: "Francois D'Agostini",
            rating: 5,
            timestamp: "16 July 2013",
            reviewText: "What a great place, I can't say enough good things about it."
        },{
            author: "Charlie Chaplin",
            rating: 3,
            timestamp: "16 June 2013",
            reviewText: "It was okay. Coffee wasn't great, but the wifi was fast."
        }]
    }
});
};


module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { 
    title: 'Review Starcups on Loc8r',
    pageHeader: {title: "Review Starcups"} 
});
};