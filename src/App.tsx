import { Router } from 'presentation/pages/Router'
import 'presentation/styles/theme.scss'
import 'presentation/styles/reset.scss'
import 'platform/i18n/setup'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}
