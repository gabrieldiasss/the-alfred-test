import { useParams } from 'react-router-dom'
import { HeroDetails } from './components/HeroDetails'
import { LastReleases } from './components/LastReleases'
import { HeroContainer, HeroContent } from './styles'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { HeaderHero } from './components/HeaderHero'
import { getFormattedDate } from '@/utils/formatDate'

export interface Comics {
  id: number
  title: string
  available: number
  dates: {
    date: Date
  }[]
  thumbnail: {
    path: string
    extension: string
  }
}

export interface IHeroDetails {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    available: number
    items: {
      id: number
      title: string
      thumbnail: {
        path: string
        extension: string
      }
    }[]
  }
  series: {
    items: {
      name: string
    }[]
  }
}

export function Hero() {
  const { id } = useParams()

  const [hero, setHero] = useState<IHeroDetails>({} as IHeroDetails)
  const [comics, setComics] = useState<Comics[]>([])

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((response) => setHero(response.data.data.results[0]))
  }, [id])

  useEffect(() => {
    api.get(`/characters/${id}/comics`).then((response) => {
      setComics(response.data.data.results)
    })
  }, [])

  const date = getFormattedDate(comics[0]?.dates[0].date)

  return (
    <HeroContainer>
      <HeroContent>
        <HeaderHero />

        <HeroDetails hero={hero} lastRelease={date as string} />

        <LastReleases comics={comics} />
      </HeroContent>
    </HeroContainer>
  )
}
