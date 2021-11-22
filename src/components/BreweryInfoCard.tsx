import styled from '@emotion/styled';

import BreweryListItem from './types/BreweryListItem'

const Card = styled("div")({
  background: '#FFF',
  borderRadius: 12,
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'baseline',
  boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.75)',
  width: '100%',
  textAlign: 'left'
})

interface BreweryInfoCardProps {
  brewery: BreweryListItem
}

export default function BreweryInfoCard({
  brewery
}: BreweryInfoCardProps): JSX.Element {
  return (
    <Card>
      <h3>{brewery.name}</h3>
      <h5>Brewery type is {brewery.brewery_type}</h5>
      <h5><a href={brewery.website_url}>{brewery.website_url}</a></h5>
    </Card>
  )
}
