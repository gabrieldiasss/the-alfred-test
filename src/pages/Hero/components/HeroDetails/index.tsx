import { RegularText, TitleText } from '@/components/Typography'
import {
  ComicsAndMovies,
  HeroDetailsContainer,
  HeroHeader,
  HeroImage,
  HeroInfo,
  LastComic,
} from './styles'
import { FaBook } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { type IHeroDetails } from '../..'
import { HeroStats } from '../HeroStats'
import { HeartFavorite } from '@/components/HeartFavorite'
import { Rating } from '../Rating'

interface HeroDetailsProps {
  hero: IHeroDetails
}

export function HeroDetails({ hero }: HeroDetailsProps) {
  return (
    <HeroDetailsContainer>
      <HeroInfo>
        <HeroHeader>
          <TitleText size="l">{hero.name}</TitleText>
          <HeartFavorite hero={hero} size={30} />
        </HeroHeader>

        <RegularText size="l">{hero.description}</RegularText>

        <ComicsAndMovies>
          <HeroStats
            title={'Quadrinhos'}
            icon={<FaBook />}
            heroCount={hero.comics?.items.length}
          />
          <HeroStats
            title={'Filmes'}
            icon={<BiMoviePlay />}
            heroCount={hero.series?.items.length}
          />
        </ComicsAndMovies>

        <Rating rating={4} />

        <LastComic>Último quadrinho: 13 fev 2020</LastComic>
      </HeroInfo>

      <HeroImage>
        <img
          src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
          alt=""
        />
      </HeroImage>
    </HeroDetailsContainer>
  )
}
