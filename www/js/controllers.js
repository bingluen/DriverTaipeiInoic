angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  /*$ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });*/

  $scope.modal = $ionicModal;

  $scope.bannerImage = 'img/menu_topimage_day.png';
})

.controller('HelperCtrl', function($scope) {

})

.controller('SettingCtrl', function($scope) {
})

.controller('AboutCtrl', function($scope) {
    $scope.image = {
      banner_background:'img/about_banner_background.jpg',
      logo_word: 'img/about_logo_word.png',
      logo_icon: 'img/about_logo_icon.png'
    }
});
