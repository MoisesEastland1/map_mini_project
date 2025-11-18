let latRes = document.querySelector('lat');
let lgnRes = document.querySelector('lgn');
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
const lat = pos.coords.latitude;
const lng = pos.coords.longitude;

const showLat = document.createElement('div');
showLat.classList.add('lat');
showLat.innerHTML = `
<p><span>Latitude:</span> ${lat}</p>
`;
document.querySelector('.lat').appendChild(showLat);

const showLng = document.createElement('div');
showLng.classList.add('lng');
showLng.innerHTML = `
<p><span>Longitude</span>: ${lng}</p>
`;
document.querySelector('.lat').appendChild(showLng);

console.log(`latitude ${lat}`);
console.log(`longitude ${lng}`);
marker.setLatLng([lat, lng]).update();
map.setView([lat, lng], 13);

marker.bindPopup('<strong>Hello World</strong> <br> This is my location ');
});