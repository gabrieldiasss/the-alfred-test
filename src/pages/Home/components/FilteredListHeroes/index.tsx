import { RegularText } from '@/components/Typography'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaUserNinja } from 'react-icons/fa'
import Switch from 'react-switch'

interface FilteredListHeroesProps {
  onRenderFavoriteHeroes: () => void
  onlyFavorites: boolean
  checked: boolean
  handleChange: () => void
}

export function FilteredListHeroes({
  onRenderFavoriteHeroes,
  onlyFavorites,
  checked,
  handleChange,
}: FilteredListHeroesProps) {
  return (
    <div style={{ cursor: 'pointer' }}>
      <RegularText size="l" color="brand-red">
        <FaUserNinja /> Ordenar por nome - A/Z
        <Switch checked={checked} checkedIcon={false} onChange={handleChange} />
      </RegularText>
      <RegularText size="l" color="brand-red">
        {onlyFavorites ? (
          <AiFillHeart
            onClick={onRenderFavoriteHeroes}
            size={24}
            color="#FF1510"
          />
        ) : (
          <AiOutlineHeart
            onClick={onRenderFavoriteHeroes}
            size={24}
            color="#FF1510"
          />
        )}
        Somente favoritos
      </RegularText>
    </div>
  )
}
