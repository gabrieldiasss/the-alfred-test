import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Assessment } from './styles'
import { RegularText } from '@/components/Typography'

export function Rating({ rating }: { rating: number }) {
  const stars = [0, 0, 0, 0, 0]
  const floor = Math.floor(rating)

  for (let i = 0; i < floor; i++) {
    stars[i] = 1
  }

  return (
    <Assessment>
      <RegularText size="l">Rating</RegularText>
      {stars.map((star, key) => (
        <div key={key}>
          {star === 0 && <AiOutlineStar size={24} />}
          {star === 1 && <AiFillStar size={24} />}
        </div>
      ))}
    </Assessment>
  )
}
