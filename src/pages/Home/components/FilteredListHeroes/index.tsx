import { RegularText } from '@/components/Typography'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaUserNinja } from 'react-icons/fa'

interface FilteredListHeroesProps {
  onRenderFavoriteHeroes: () => void
  onlyFavorites: boolean
}

export function FilteredListHeroes({
  onRenderFavoriteHeroes,
  onlyFavorites,
}: FilteredListHeroesProps) {
  return (
    <>
      <div style={{ cursor: 'pointer' }}>
        <RegularText color="brand-red">
          <FaUserNinja /> Ordenar por nome - A/Z
        </RegularText>
        <RegularText color="brand-red">
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
    </>
  )
}
