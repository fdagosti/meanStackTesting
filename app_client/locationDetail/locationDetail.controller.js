(function () {

  angular
    .module('loc8rApp')
    .controller('locationDetailCtrl', locationDetailCtrl);

locationDetailCtrl.$inject = ["$routeParams", "$location", "$uibModal","loc8rData", "authentication"];
  function locationDetailCtrl($routeParams, $location, $uibModal, loc8rData, authentication) {
    var vm = this;
   vm.locationid = $routeParams.locationid;

   vm.isLoggedIn = authentication.isLoggedIn();

   vm.currentPath = $location.path();

   loc8rData.locationbyId(vm.locationid)
    .success(function(data){
        vm.data = {location: data};
        vm.pageHeader= {
            title: vm.data.location.name
        }
    })
    .error(function(e){
        console.log(e);
    });

    vm.popupReviewForm = function(){
      var modalInstance = $uibModal.open({
        templateUrl: "/reviewModal/reviewModal.view.html",
        controller: "reviewModalCtrl as vm",
        resolve: {
          locationData: function() {
            return {
              locationid: vm.locationid,
              locationName : vm.data.location.name
            };
          }
        }
      });
      modalInstance.result.then(function(data) {
        console.log("modal closed data = "+data);
        vm.data.location.reviews.push(data);
      });
    };
  }

}) ();