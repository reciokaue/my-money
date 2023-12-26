import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { PriceHighlight, Table, TransactionsContainer } from './styles'
import { useTransactions } from '../../contexts/Transactions'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <Table>
          <tbody>
            {transactions?.map((item) => (
              <tr key={item.id}>
                <td width="50%">{item.description}</td>
                <td>
                  <PriceHighlight variant={item.type}>
                    R$ {item.price}
                  </PriceHighlight>
                </td>
                <td>{item.category}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TransactionsContainer>
    </div>
  )
}
