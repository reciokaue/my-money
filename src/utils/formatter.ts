export const dateFormatter = (value: string) =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(value))

export const priceFormatter = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
