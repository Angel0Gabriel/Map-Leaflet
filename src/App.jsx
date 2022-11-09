import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import LeafletGeocoder from './LeafletGeocoder';
import L from "leaflet";

function App() {

  const position = [51.505, -0.09];

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ]

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletGeocoder />
    </MapContainer>

  )
}

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default App
