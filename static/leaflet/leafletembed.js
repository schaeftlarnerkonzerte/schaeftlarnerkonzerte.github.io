var map;
var ajaxRequest;
var plotlist;
var plotlayers = [];

function initmap() {
	// set up the map
	map = new L.Map('mapid');

	// create the tile layer with correct attribution
	var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 9, maxZoom: 16, attribution: osmAttrib});
	
	// start the map in Kloster Schäftlarn
	map.setView(new L.LatLng(47.978342, 11.4672), 14);
	map.addLayer(osm);

	for (var i=0; i < markers.length; ++i ) 
{
 //  L.marker( [markers[i].lat, markers[i].lng] ).addTo( map )
 //     .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' //).openPopup();
    
    L.marker( [markers[i].lat, markers[i].lng] )
    .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' ).addTo( map );
}
  //  L.control.scale( ).addTo( map );
}
