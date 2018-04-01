/* 
    var NAME = {lat: , lng: };
    var marker = new google.maps.Marker({
        position: NAME,
        map: map,
        title:'Title'
      });
*/
function initMap() {
    var woodLandParkZoo = {lat: 47.6683, lng: -122.3509};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: woodLandParkZoo,
      styles: [
        //Hides all poi markers
        {
      featureType: 'poi',
      stylers: [{visibility: 'off'}]
    }
    ]

    });
    var marker = new google.maps.Marker({
      position: woodLandParkZoo,
      map: map
    });
    
      // Brown Bear Exhibit
    var brownBear = {lat: 47.671169, lng: -122.350671};
    var marker = new google.maps.Marker({
        position: brownBear,
        map: map,
        title: 'Brown Bear'
      });
      //ELk Exhibit
      var elk = {lat: 47.670650, lng:-122.349458 };
      var marker = new google.maps.Marker({
          position: elk,
          map: map,
          title:'Elk Exhibit'
        });
        //Emu Exhibit
      var emu = {lat: 47.670271, lng:-122.351066 };
      var marker = new google.maps.Marker({
          position: emu,
          map: map,
          title:'Emu Exhibit'
        });
        //Grey Owl Exhibit
      var greyOwl = {lat: 47.670635, lng:-122.350725 };
      var marker = new google.maps.Marker({
          position: greyOwl,
          map: map,
          title:'Grey Owl Exhibit'
        });
        //Humbolt Penguin
      var humboltPenguin = {lat: 47.668903, lng:-122.352691 };
      var marker = new google.maps.Marker({
          position: humboltPenguin,
          map: map,
          title:'Humbolt Penguin'
        });
        // Mountain Goat Exhibit
    var mountainGoat = {lat: 47.671276, lng: -122.350134};
    var marker = new google.maps.Marker({
        position: mountainGoat,
        map: map,
        title: 'Mountain Goat Exhibit'
      });
      // Otter Exhibit
    var otter = {lat: 47.671169, lng: -122.350273};
    var marker = new google.maps.Marker({
        position: otter,
        map: map,
        title: 'Otter Exhibit'
      });
      // Porcupine Exhibit
    var porcupine = {lat: 47.670727, lng: -122.350974};
    var marker = new google.maps.Marker({
        position: porcupine,
        map: map,
        title: 'Porcupine Exhibit'
      });
      
    // Steller's Sea Eagle Exhibit
    var seaEagle = {lat: 47.671349, lng: -122.349678};
    var marker = new google.maps.Marker({
        position: seaEagle,
        map: map,
        title: 'Sea Eagle Exhibit'
      });
      // Snow Leopard
    var snowLeopard = {lat: 47.669616, lng: -122.350310};
    var marker = new google.maps.Marker({
        position: snowLeopard,
        map: map,
        title: 'Snow Leopard Exhibit'
      });
          // Wolf Exhibit
    var wolf = {lat: 47.670610, lng: -122.350336};
    var marker = new google.maps.Marker({
        position: wolf,
        map: map,
        title: 'Wolf Exhibit'
      });
      // Wallaby Exhibit
    var wallaby = {lat: 47.670161, lng: -122.351140};
    var marker = new google.maps.Marker({
        position: wallaby,
        map: map,
        title: 'Wallaby Exhibit'
      });
      // Wallaroo Exhibit
    var wallaroo = {lat: 47.670013, lng: -122.351117};
    var marker = new google.maps.Marker({
        position: wallaroo,
        map: map,
        title: 'Wallaroo Exhibit'
      });
      

  }
