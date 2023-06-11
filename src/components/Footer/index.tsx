import { RegularText } from '../Typography'
import { FooterContainer, FooterContent } from './styles'
import TheAlfred from '@/assets/logo-the-alfred.svg'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <RegularText>&copy; 2023 Gabriel Dias</RegularText>

        <img src={TheAlfred} alt="" />
      </FooterContent>
    </FooterContainer>
  )
}
