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
showLat.style.display ='flex';
showLat.style.flexDirection ='column';
showLat.style.alignItems = 'center';
showLat.style.justifyContent = 'center';

document.querySelector('.lat').appendChild(showLat);

const showLng = document.createElement('div');
showLng.classList.add('lng');
showLng.innerHTML = `
<p><span>Longitude</span>: ${lng}</p>
`;
showLng.style.display ='flex';
showLng.style.flexDirection ='column';
showLng.style.alignItems = 'center';
showLng.style.justifyContent = 'center';

document.querySelector('.lng').appendChild(showLng);


marker.setLatLng([lat, lng]).update();
map.setView([lat, lng], 13);

marker.bindPopup('<strong>Hello World</strong> <br> This is my location ');
});