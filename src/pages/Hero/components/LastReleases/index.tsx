import { RegularText, TitleText } from '@/components/Typography'
import { ComicCard, ComicList, LastReleasesContainer } from './styles'
import { type Comics } from '../..'

interface LastReleasesProps {
  comics: Comics[]
}

export function LastReleases({ comics }: LastReleasesProps) {
  return (
    <LastReleasesContainer>
      <TitleText>Últimos lançamentos</TitleText>

      <ComicList>
        {comics.map((comic) => (
          <ComicCard key={comic.id}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
            <RegularText>{comic.title}</RegularText>
          </ComicCard>
        ))}
      </ComicList>
    </LastReleasesContainer>
  )
}
