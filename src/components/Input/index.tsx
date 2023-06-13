import { BiSearch } from 'react-icons/bi'
import { InputContainer, InputStyle, InputWrapper } from './styles'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { AutoComplete } from '../AutoComplete'

interface InputProps {
  theme: 'red' | 'white'
}

export interface HeroSearch {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

export function Input({ theme }: InputProps) {
  const [search, setSearch] = useState('')
  const [heroesSearch, setHeroesSearch] = useState<HeroSearch[]>([])

  useEffect(() => {
    api
      .get(`/characters`, {
        params: {
          nameStartsWith: search,
        },
      })
      .then((response) => {
        setHeroesSearch(response.data.data.results)
      })
  }, [search])

  return (
    <InputContainer>
      <InputWrapper variant={theme}>
        <BiSearch size={28} />
        <InputStyle
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Procure por heróis"
        />
      </InputWrapper>

      {search !== '' && <AutoComplete heroesSearch={heroesSearch} />}
    </InputContainer>
  )
}
