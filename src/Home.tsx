import { useState } from 'react';
import styled from '@emotion/styled';

import BreweryList from './components/BreweryList';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import BreweryListItem from './components/types/BreweryListItem';

const PageLayout = styled("div")({
  display: 'flex',
  height: '100vh'
});

const BreweryListContainer = styled("div")({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 20
});

const MapContainer = styled("div")({
  display: 'flex',
  flex: 2,
  height: '100vh'
});

export default function HomePage(): JSX.Element {
  const [data, setData] = useState<null | BreweryListItem[]>(null)
  async function submitFn(city: string, page: number = 1) {
    let apiUrlBase = `https://api.openbrewerydb.org/breweries?by_city=${city}&page=${page}&per_page=25`;
    const response = await fetch(apiUrlBase)
    const responseData = await response.json();
    setData(responseData)
  }
  return (
    <PageLayout>
      <BreweryListContainer>
        <SearchBar placeholder="Search by US city" onSubmit={(text: string) => submitFn(text, 1)} />
        <BreweryList items={data} />
      </BreweryListContainer>
      <MapContainer>
        <Map items={data} />
      </MapContainer>
    </PageLayout>
  )
};
