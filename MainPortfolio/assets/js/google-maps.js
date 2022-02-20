function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -34.901112, lng: -56.164532};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Montevideo, Uruguay' // Title Location
    });
}