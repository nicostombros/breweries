import { useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import getLatLngBounds from './GetBounds';
import MapLoading from './MapLoading';
import MapError from './MapError';

import { GOOGLE_MAPS_KEY } from '../../constants';


interface MarkerItem {
  name: string;
  longitude: number;
  latitude: number;
}

interface PigeonMapProps {
  items?: MarkerItem[] | null,
  defaultZoom?: number
}

export default function PigeonMap({
  items,
  defaultZoom = 11,
}: PigeonMapProps): JSX.Element {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_KEY,
  });
  const center = {
    lat: items ? Number(items[0]["latitude"]) : 0,
    lng: items ? Number(items[0]["longitude"]) : 0,
  };

  const onLoad = useCallback(
    (map) => {
      if (items) {
        const boundsFromPoints = getLatLngBounds(items);
        const bounds = new window.google.maps.LatLngBounds(
          boundsFromPoints[0],
          boundsFromPoints[1]
        );
        map.fitBounds(bounds);
      }
    },
    [items]
  );

  let google: any;

  const renderMap = () => {
    return (
      <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%",
      }}
      options={{
        mapTypeControl: false,
        gestureHandling: "cooperative",
        zoomControlOptions: {
          position: google && google?.maps?.ControlPosition.RIGHT_CENTER,
        },
      }}
      center={center}
      zoom={defaultZoom}
      onLoad={onLoad}
    >
      {
        items && items.map((item, index) => {
          let hasCoords = item.latitude && item.longitude;
          if (hasCoords) {
            return (
              <Marker
                key={index}
                position={{
                  lat: Number(item.latitude),
                  lng: Number(item.longitude)
                }}
              />
            )
          } else {
            return null
          }
        })
      }
    </GoogleMap>
    );
  };

  if (loadError) {
    return <MapError />;
  }

  return isLoaded ? renderMap() : <MapLoading />;
}
