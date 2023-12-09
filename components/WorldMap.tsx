import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import map from "../res/world.json"
import markers from "../res/markers.json"

const selectedCountries = [
  "FRA", "ESP", "ITA", "DEU", "GBR", "NLD", "BEL", "SWE", "AUS",
  "PRT", "DEN", "CHE", "NOR", "FIN", "POL", "AUT", "ARG", "CZE",
  "USA", "CAN", "DNK", "IRL", "ISL", "HRV", "NZL"
];

const selectedColor: string = "#4464ad";
const mapWidth = window.innerWidth * 0.6;
const mapHeight = window.innerHeight * 0.6;

const WorldMap = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 100
      }}
      height={mapHeight}
      width={mapWidth}
    >
      <ZoomableGroup
        translateExtent={[
          [0, 0],
          [mapWidth, mapHeight]
        ]}
        minZoom={1}
      >
        <Geographies
          geography={map}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                selectedCountries.includes(geo.properties.adm0_a3)
                  ? <Geography key={geo.rsmKey} geography={geo} fill={selectedColor} />
                  : <Geography key={geo.rsmKey} geography={geo} />
              )
            }
            )
          }
        </Geographies>
        {markers.map((marker) => (
          <Marker key={marker.name} coordinates={marker.coord as [number, number]}>
            <text dx="4" dy="2" fontSize="6" fontFamily="sans-serif">{marker.name}</text>
            <circle r="2" fill="#FFF" stroke="#FB3640" />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
