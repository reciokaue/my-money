import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoImg from '../../assets/IgniteSimbol.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionsModal } from '../NewTransactionsModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
