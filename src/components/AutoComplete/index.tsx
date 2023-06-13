import { Link } from 'react-router-dom'
import { HeroSearch } from '../Input'
import { RegularText } from '../Typography'
import { AutoCompleteContainer, AutoCompleteItem } from './styles'

interface AutoCompleteProps {
  heroesSearch: HeroSearch[]
}

export function AutoComplete({ heroesSearch }: AutoCompleteProps) {
  return (
    <AutoCompleteContainer>
      {heroesSearch.map((heroSearch) => (
        <Link key={heroSearch.id} to={`/${heroSearch.id}`}>
          <AutoCompleteItem>
            <img
              src={`${heroSearch.thumbnail.path}.${heroSearch.thumbnail.extension}`}
              alt={heroSearch.name}
            />
            <RegularText style={{ marginTop: 0 }}>
              {heroSearch.name}
            </RegularText>
          </AutoCompleteItem>
        </Link>
      ))}
    </AutoCompleteContainer>
  )
}
