import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { PriceHighlight, Table, TransactionsContainer } from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <Table>
          <tbody>
            {transactions.map((item) => (
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
