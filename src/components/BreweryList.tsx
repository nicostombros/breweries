import styled from '@emotion/styled';
import BreweryInfoCard from './BreweryInfoCard';
import BreweryListItem from './types/BreweryListItem';

const ListContainer = styled("div")({
  display: 'flex',
  gap: 16,
  marginTop: 16,
  padding: 4,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  overflowY: 'scroll'
})

interface BreweryListProps {
  items?: BreweryListItem[] | null
}

export default function BreweryList({
  items
}: BreweryListProps): JSX.Element {
  return (
    <ListContainer>
      {
        items ? items.map((item, index) => (
          <BreweryInfoCard key={index} brewery={item} />
        )) : "Please search by city to find a brewery"
      }
    </ListContainer>
  )
}
