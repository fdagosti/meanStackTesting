(function(){

    angular
       .module('loc8rApp')
       .service('loc8rData', loc8rData);

    loc8rData.$inject = ["$http"];   
    function loc8rData ($http) {
       var locationByCoords = function (lat, lng) {
         return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=200');
       };

       var locationbyId = function(locationid) {
        return $http.get("/api/locations/"+locationid);
       }; 

       var addReviewById = function(locationid, data) {
        console.log("post to "+"/api/locations/"+locationid+"/reviews"+" data : "+data.author+" "+data.rating+" "+data.reviewText)
        return $http.post("/api/locations/"+locationid+"/reviews", data);
       };

       return {
         locationByCoords : locationByCoords,
         locationbyId : locationbyId,
         addReviewById : addReviewById
       };
    };
})();