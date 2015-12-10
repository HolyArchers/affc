//= require_tree .
$(window).ready(function(){

  var map = L.map('map').setView([29.591413, -95.459528], 13);

  L.tileLayer('https://api.tiles.mapbox.com/v4/chundabear.m9kd1gli/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2h1bmRhYmVhciIsImEiOiI1d1VyMTRrIn0.VEZKraUkj5Scu6y0urC5DQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 13,
      id: 'chundabear.m9kd1gli',
      accessToken: 'pk.eyJ1IjoiY2h1bmRhYmVhciIsImEiOiI1d1VyMTRrIn0.VEZKraUkj5Scu6y0urC5DQ'
  }).addTo(map);

  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  map.keyboard.disable();


  var marker = L.marker([29.591413, -95.459528]).addTo(map);
    marker.bindPopup("We meet here! At Ridgemont Community Center.")
    marker.openPopup();

});
