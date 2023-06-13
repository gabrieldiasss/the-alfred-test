import { useNavigate } from 'react-router-dom'
import { RegularText } from '../../../../components/Typography'
import { HeroCardContainer, HeroInfo } from './styles'
import { HeartFavorite } from '@/components/HeartFavorite'

export interface Hero {
  id: number
  name: string
  thumbnail: {
    extension: string
    path: string
  }
}

interface HeroCardProps {
  hero: Hero
}

export function HeroCard({ hero }: HeroCardProps) {
  const navigate = useNavigate()

  return (
    <HeroCardContainer>
      <img
        onClick={() => {
          navigate(`/${hero.id}`)
        }}
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt=""
      />

      <HeroInfo>
        <RegularText>{hero.name}</RegularText>
        <HeartFavorite hero={hero} size={22} />
      </HeroInfo>
    </HeroCardContainer>
  )
}
