import { ThemeProvider } from 'styled-components'
import { TransactionsProvicder } from './contexts/TransactionsContext'
import { Transaction } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvicder>
        <Transaction />
      </TransactionsProvicder>
    </ThemeProvider>
  )
}
