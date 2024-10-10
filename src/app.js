console.log('Hello World');

import * as Leaflet from 'leaflet';

console.log(Leaflet);

import Leaflet from 'leaflet'; // import everything from leaflet
import 'leaflet/dist/leaflet.css'; // import leaflet css

const WBS = [52.457131, 13.54007]; // WBS coordinates
const map = Leaflet.map('map').setView(WBS, 13); // create a map object with a center and zoom level
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20],
}); // There was an issue with the default marker icon, so we create a new one
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); // add a marker to the map at the WBS coordinates

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map

const myLocations = [
  {
    name: 'Zuhause',
    location: [50.813455, 7.943412],
    description: 'Home, sweet home!',
  },

  {
    name: 'Lorensers',
    location: [50.477865, 7.797151],
    description: 'Wonderful friends',
  },

  {
    name: 'Vortex Surfer',
    location: [50.898031, 8.029038],
    description: 'Best music club in the world',
  },
];

// Add markers to the map with a popup
myLocations.forEach((location) => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(location.description)
    .addTo(map);
});

// Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(
  myLocations.map((location) => location.location)
);
map.fitBounds(bounds);
