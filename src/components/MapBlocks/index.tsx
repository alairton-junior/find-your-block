import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Location from '../../assets/location.svg'
import { useBlocks } from "../../hooks/useBlocks";

const myIcon = L.icon({
  iconUrl: Location,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

export default function MapBlocks() {

  const { blocks } = useBlocks();

  const position: [number, number] = [-14.235, -51.925];

  return (
    <>
      <MapContainer center={position} zoom={5} scrollWheelZoom={true} style={{ height: "600px"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            blocks.map((block) => 
              <Marker position={[block.latitude, block.longitude]} icon={myIcon}>
            
                <Popup className="popup">
                  <h1>{block.name}</h1>
                  <p>{block.description}</p>
                  <p><img src={Location} alt="Localização" />{block.city} - {block.UF}</p>
                </Popup>
              </Marker>
            )
          }

      </MapContainer>
    </>
  );
}
