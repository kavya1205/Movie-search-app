import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <QueryClientProvider client={queryClient}>
     <Header/>
      <Dashboard/>
      <Footer/>
    </QueryClientProvider>
      
    </>
  )
}

export default App
