import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
      <App />
  </StrictMode>,
)

