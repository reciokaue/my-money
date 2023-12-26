'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
}

const TransactionsContext = createContext({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)
