import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/locationMap.style.css";

const LocationMap = () => {
  const position = [44.774171015313705, 17.17842390983063];

  return (
    <div className="location-wrapper">
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={position}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          <Marker position={position}>
            <Popup>📍 The blog app creator is here.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <p>
        This is the location of the blog creator — based in Jovana Raskovica 16,
        Banja Luka, Bosnia and Herzegovina.
      </p>
    </div>
  );
};

export default LocationMap;
