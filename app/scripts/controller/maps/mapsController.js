(function() {
  'use strict';

  angular.module('formApp.mapController', []);


  function mapController() {
    var self = this;
    var bogota = {
      lat: 4.633164588210062,
      lng: -74.06424524338911
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 4.633164588210062,
        lng: -74.06424524338911
      },
      zoom: 15
    });

    var marker = new google.maps.Marker({
      position: bogota,
      map: map
    });
  }

  angular.module('formApp.mapController').controller('mapCtrl', mapController);

})();
