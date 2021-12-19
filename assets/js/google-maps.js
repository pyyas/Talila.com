function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 9.015743226701806, lng: 38.78710606731158};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}