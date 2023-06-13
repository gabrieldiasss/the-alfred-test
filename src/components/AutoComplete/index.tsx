import { Link } from 'react-router-dom'
import { HeroSearch } from '../Input'
import { RegularText } from '../Typography'
import { AutoCompleteContainer, AutoCompleteItem } from './styles'
import { AiOutlineClose } from 'react-icons/ai'

interface AutoCompleteProps {
  heroesSearch: HeroSearch[]
  onClose: () => void
}

export function AutoComplete({ heroesSearch, onClose }: AutoCompleteProps) {
  return (
    <AutoCompleteContainer>
      <AiOutlineClose onClick={() => onClose()} size={28} />
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
