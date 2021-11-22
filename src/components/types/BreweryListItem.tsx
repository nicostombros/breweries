export default interface BreweryListItem {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  website_url?: string;
  brewery_type: string;
}
