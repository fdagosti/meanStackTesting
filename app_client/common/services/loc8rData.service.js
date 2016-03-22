(function(){

    angular
       .module('loc8rApp')
       .service('loc8rData', loc8rData);

    loc8rData.$inject = ["$http", "authentication"];   
    function loc8rData ($http, authentication) {
       var locationByCoords = function (lat, lng) {
         return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=200');
       };

       var locationbyId = function(locationid) {
        return $http.get("/api/locations/"+locationid);
       }; 

       var addReviewById = function(locationid, data) {
        console.log("post to "+"/api/locations/"+locationid+"/reviews"+" data : "+data.author+" "+data.rating+" "+data.reviewText)
        return $http.post("/api/locations/"+locationid+"/reviews", data, {
          headers: {
            Authorization: "Bearer "+ authentication.getToken()
          }
        });
       };

       return {
         locationByCoords : locationByCoords,
         locationbyId : locationbyId,
         addReviewById : addReviewById
       };
    };
})();