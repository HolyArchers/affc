$(window).ready(function(){var e=L.map("map").setView([29.591413,-95.459528],13);L.tileLayer("https://api.tiles.mapbox.com/v4/chundabear.m9kd1gli/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2h1bmRhYmVhciIsImEiOiI1d1VyMTRrIn0.VEZKraUkj5Scu6y0urC5DQ",{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="http://mapbox.com">Mapbox</a>',maxZoom:13,id:"chundabear.m9kd1gli",accessToken:"pk.eyJ1IjoiY2h1bmRhYmVhciIsImEiOiI1d1VyMTRrIn0.VEZKraUkj5Scu6y0urC5DQ"}).addTo(e),e.dragging.disable(),e.touchZoom.disable(),e.doubleClickZoom.disable(),e.scrollWheelZoom.disable(),e.keyboard.disable();var a=L.marker([29.591413,-95.459528]).addTo(e);a.bindPopup("We meet here! At Ridgemont Community Center."),a.openPopup()});