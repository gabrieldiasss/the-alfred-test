import { type ReactNode } from 'react'
import { RegularText } from '@/components/Typography'
import { HeroStatsContainer } from './styles'

interface HeroStatsProps {
  title: string
  icon: ReactNode
  heroCount: number
}

export function HeroStats({ title, icon, heroCount }: HeroStatsProps) {
  return (
    <HeroStatsContainer>
      <div className="heroCount">
        <RegularText>{title}</RegularText>
        <div>
          {icon} {heroCount}
        </div>
      </div>
    </HeroStatsContainer>
  )
}
