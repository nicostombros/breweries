interface Point {
  name: string;
  latitude: number;
  longitude: number;
}

export default function getLatLngBounds(points: Point[]) {
  let latitudes: number[] = [];
  let longitudes: number[] = [];
  points.map((point: Point) => {
    latitudes.push(point.latitude);
    longitudes.push(point.longitude);
  });
  // Have to return in format [sw, ne], where se and nw are both LatLng objects
  const swBounds = {
    lat: Math.min(...latitudes),
    lng: Math.min(...longitudes),
  };
  const neBounds = {
    lat: Math.max(...latitudes),
    lng: Math.max(...longitudes),
  };
  return [swBounds, neBounds];
}
