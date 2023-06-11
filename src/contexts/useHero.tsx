import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useToasts } from 'react-toast-notifications'

export interface Hero {
  id: number
  name: string
  thumbnail: {
    extension: string
    path: string
  }
}

interface HeroContextType {
  handleFavoriteHero: (heroFavorite: Hero) => void
  heroesFavorite: Hero[]
  heroInList: Record<number, boolean>
}

interface HeroContextProviderProps {
  children: ReactNode
}

const HERO_ITEMS_STORAGE_KEY = 'marvelTheAlfred:heroFavoritesList'
const HERO_FAVORITE = 'marvelTheAlfred:isHeroFavorites'

export const HeroContext = createContext({} as HeroContextType)

export function HeroContextProvider({ children }: HeroContextProviderProps) {
  const [heroesFavorite, setHeroesFavorite] = useState<Hero[]>(() => {
    const storedHeroFavorites = localStorage.getItem(HERO_ITEMS_STORAGE_KEY)

    if (storedHeroFavorites) {
      return JSON.parse(storedHeroFavorites)
    }

    return []
  })

  const [heroInList, setHeroInList] = useState<Record<number, boolean>>(() => {
    const storedHasHeroFavorites = localStorage.getItem(HERO_FAVORITE)

    if (storedHasHeroFavorites) {
      return JSON.parse(storedHasHeroFavorites)
    }

    return {}
  })
  const { addToast } = useToasts()

  function handleFavoriteHero(heroFavorite: Hero) {
    const heroAlreadyExistsInListFavorites = heroesFavorite.some(
      (hero) => hero.id === heroFavorite.id,
    )

    if (heroAlreadyExistsInListFavorites) {
      setHeroesFavorite(
        heroesFavorite.filter((hero) => hero.id !== heroFavorite.id),
      )

      addToast('Herói foi removido da lista', {
        appearance: 'info',
        autoDismiss: true,
      })

      setHeroInList({
        ...heroInList,
        [heroFavorite.id]: !heroInList[heroFavorite.id],
      })

      return
    }

    if (heroesFavorite.length >= 5) {
      addToast('Não é possível ter mais de 6 heróis na lista. ', {
        appearance: 'error',
        autoDismiss: true,
      })

      return
    }

    const newHeroInList = [...heroesFavorite, heroFavorite]

    setHeroesFavorite(newHeroInList)

    setHeroInList({ ...heroInList, [heroFavorite.id]: true })
    addToast('Herói adicionado na lista', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  useEffect(() => {
    localStorage.setItem(HERO_ITEMS_STORAGE_KEY, JSON.stringify(heroesFavorite))

    localStorage.setItem(HERO_FAVORITE, JSON.stringify(heroInList))
  }, [heroesFavorite, heroInList])

  return (
    <HeroContext.Provider
      value={{ handleFavoriteHero, heroesFavorite, heroInList }}
    >
      {children}
    </HeroContext.Provider>
  )
}

export function useHero() {
  const useHero = useContext(HeroContext)

  return useHero
}
