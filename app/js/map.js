
        // Initialize and add the map
        function initMap() {
          // The location of Uluru
          var uluru = {lat: 41.8248285, lng: 12.3897457};
          // The map, centered at Uluru
          var map = new google.maps.Map(
              document.getElementById('map'), {zoom: 10, center: uluru});
          // The marker, positioned at Uluru
          //var marker = new google.maps.Marker({position: uluru, map: map});
          var marker = new google.maps.Marker({
              position: uluru, 
              map: map,
              icon: 'images/marker.png'
            });

            var infoWindow = new google.maps.InfoWindow ({
                content: '<h6>Bricktower</h6>'
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });

        };
            