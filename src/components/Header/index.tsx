import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from '../../assets/IgniteSimbol.svg'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />
        <NewTransactionButton>
          Nova Transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}